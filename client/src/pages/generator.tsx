import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Wand2,
  Sparkles,
  Download,
  Copy,
  Heart,
  RotateCcw,
  Image,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Project, Asset } from "@/shared/schema";

const styleOptions = [
  { value: "modern", label: "Modern" },
  { value: "minimal", label: "Minimal" },
  { value: "playful", label: "Playful" },
  { value: "corporate", label: "Corporate" },
  { value: "elegant", label: "Elegant" },
];

const sizeOptions = [
  { value: "1024x1024", label: "Square (1024x1024)" },
  { value: "1024x1792", label: "Portrait (1024x1792)" },
  { value: "1792x1024", label: "Landscape (1792x1024)" },
];

const promptSuggestions = [
  "Modern dashboard UI with data visualization charts",
  "E-commerce product card with gradient background",
  "Mobile app onboarding screen with illustrations",
  "SaaS landing page hero section",
  "Login form with glassmorphism effect",
  "Admin sidebar navigation design",
];

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("modern");
  const [size, setSize] = useState("1024x1024");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [generatedAsset, setGeneratedAsset] = useState<Asset | null>(null);
  const { toast } = useToast();

  const { data: projects = [], isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const generateMutation = useMutation({
    mutationFn: async (data: { projectId: string; name: string; prompt: string; style: string; size: string }) => {
      const res = await apiRequest("POST", "/api/assets/generate", data);
      return res.json();
    },
    onSuccess: (asset: Asset) => {
      setGeneratedAsset(asset);
      queryClient.invalidateQueries({ queryKey: ["/api/projects", selectedProjectId, "assets"] });
      toast({ title: "Asset generated successfully" });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to generate asset", description: error.message, variant: "destructive" });
    },
  });

  const handleGenerate = () => {
    if (!prompt.trim() || !selectedProjectId) {
      toast({ 
        title: "Missing information", 
        description: selectedProjectId ? "Please enter a prompt" : "Please select a project first",
        variant: "destructive" 
      });
      return;
    }
    
    generateMutation.mutate({
      projectId: selectedProjectId,
      name: prompt.slice(0, 50),
      prompt,
      style,
      size,
    });
  };

  const handleDownload = () => {
    if (generatedAsset?.url) {
      window.open(generatedAsset.url, "_blank");
    }
  };

  const handleCopy = async () => {
    if (generatedAsset?.url) {
      await navigator.clipboard.writeText(generatedAsset.url);
      toast({ title: "URL copied to clipboard" });
    }
  };

  const handleRetry = () => {
    if (prompt.trim() && selectedProjectId) {
      handleGenerate();
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">AI Asset Generator</h1>
        <p className="text-muted-foreground">Generate stunning UI assets with DALL-E powered AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary" />
                Generate New Asset
              </CardTitle>
              <CardDescription>Describe what you want to create</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Project</Label>
                {projectsLoading ? (
                  <Skeleton className="h-10 w-full" />
                ) : projects.length === 0 ? (
                  <div className="flex items-center gap-2 p-3 rounded-lg border border-dashed text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4" />
                    No projects found. Create a project first.
                  </div>
                ) : (
                  <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
                    <SelectTrigger data-testid="select-project">
                      <SelectValue placeholder="Select a project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe your UI asset in detail..."
                  className="min-h-[120px]"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  data-testid="input-prompt"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {promptSuggestions.slice(0, 4).map((suggestion) => (
                  <Badge
                    key={suggestion}
                    variant="outline"
                    className="cursor-pointer hover-elevate"
                    onClick={() => setPrompt(suggestion)}
                    data-testid={`suggestion-${suggestion.slice(0, 20)}`}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {suggestion.slice(0, 30)}...
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger data-testid="select-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      {styleOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Size</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger data-testid="select-size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {sizeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || !selectedProjectId || generateMutation.isPending}
                className="w-full gap-2"
                data-testid="button-generate"
              >
                {generateMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4" />
                    Generate Asset
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>Your generated asset will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              {generateMutation.isPending ? (
                <div className="space-y-4">
                  <Skeleton className="aspect-square w-full max-w-md mx-auto rounded-lg" />
                  <div className="flex justify-center gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              ) : generatedAsset ? (
                <div className="space-y-4">
                  <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden border">
                    <img 
                      src={generatedAsset.url || ""} 
                      alt={generatedAsset.name}
                      className="w-full h-full object-cover"
                      data-testid="generated-image"
                    />
                  </div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Button variant="outline" size="sm" className="gap-1" onClick={handleDownload}>
                      <Download className="h-4 w-4" /> Download
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" onClick={handleCopy}>
                      <Copy className="h-4 w-4" /> Copy URL
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" disabled>
                      <Heart className="h-4 w-4" /> Save
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" onClick={handleRetry}>
                      <RotateCcw className="h-4 w-4" /> Retry
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="aspect-square max-w-md mx-auto rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Image className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                    <p className="text-muted-foreground">Generated image will appear here</p>
                  </div>
                </div>
              )}

              {!generateMutation.isPending && !generatedAsset && (
                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="outline" size="sm" className="gap-1" disabled>
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" disabled>
                    <Copy className="h-4 w-4" /> Copy
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" disabled>
                    <Heart className="h-4 w-4" /> Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" disabled>
                    <RotateCcw className="h-4 w-4" /> Retry
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generation Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>1. Select a project to save your generated assets</p>
              <p>2. Be specific about colors, styles, and layouts</p>
              <p>3. Include UI terminology like "gradient", "glassmorphism"</p>
              <p>4. Mention the target platform (mobile, web, tablet)</p>
              <p>5. Describe the mood or tone you want</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Style Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Modern</span>
                <span>Clean, contemporary design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Minimal</span>
                <span>Less is more approach</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Playful</span>
                <span>Fun, colorful elements</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Corporate</span>
                <span>Professional, business-like</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Elegant</span>
                <span>Refined, sophisticated</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
