import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Figma,
  Play,
  Settings,
  Layers,
  CheckCircle2,
  AlertCircle,
  Clock,
  Loader2,
  BookOpen,
} from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Project, FigmaFrame } from "@/shared/schema";

const frameTemplates = [
  { id: "onboarding", name: "Onboarding", pages: 5, icon: "01" },
  { id: "auth", name: "Authentication", pages: 3, icon: "02" },
  { id: "dashboard", name: "Dashboard", pages: 4, icon: "03" },
  { id: "calls", name: "Calls", pages: 3, icon: "04" },
  { id: "messages", name: "Messages", pages: 4, icon: "05" },
  { id: "integrations", name: "Integrations", pages: 2, icon: "06" },
  { id: "settings", name: "Settings", pages: 3, icon: "07" },
  { id: "payments", name: "Payments", pages: 2, icon: "08" },
  { id: "components", name: "Components", pages: 10, icon: "09" },
  { id: "tokens", name: "Design Tokens", pages: 1, icon: "10" },
];

export default function FigmaAgent() {
  const [figmaToken, setFigmaToken] = useState("");
  const [figmaFileId, setFigmaFileId] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const { data: projects = [], isLoading: loadingProjects, isError: errorProjects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: figmaFrames = [], isLoading: loadingFrames } = useQuery<FigmaFrame[]>({
    queryKey: ["/api/projects", selectedProjectId, "figma-frames"],
    enabled: !!selectedProjectId,
  });

  const renderMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/figma/render", {
        projectId: selectedProjectId,
        figmaFileId,
      });
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects", selectedProjectId, "figma-frames"] });
      toast({ title: "Frames rendered", description: `${data.frames?.length || 0} frames processed` });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const handleConnect = () => {
    if (figmaToken && figmaFileId) {
      setIsConnected(true);
      toast({ title: "Connected", description: "Figma credentials saved" });
    }
  };

  const handleRender = () => {
    if (!selectedProjectId) {
      toast({ title: "Select a project", description: "Please select a project first", variant: "destructive" });
      return;
    }
    renderMutation.mutate();
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Figma Agent</h1>
        <p className="text-muted-foreground">Create and update Figma frames programmatically</p>
      </div>

      <Tabs defaultValue="render" className="space-y-6">
        <TabsList>
          <TabsTrigger value="render" className="gap-2" data-testid="tab-render">
            <Play className="h-4 w-4" /> Render
          </TabsTrigger>
          <TabsTrigger value="config" className="gap-2" data-testid="tab-config">
            <Settings className="h-4 w-4" /> Configuration
          </TabsTrigger>
          <TabsTrigger value="templates" className="gap-2" data-testid="tab-templates">
            <Layers className="h-4 w-4" /> Templates
          </TabsTrigger>
          <TabsTrigger value="docs" className="gap-2" data-testid="tab-docs">
            <BookOpen className="h-4 w-4" /> Documentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="render" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Figma className="h-5 w-5" />
                  Render Frame
                </CardTitle>
                <CardDescription>Generate or update Figma frames from prompts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isConnected ? (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="font-semibold mb-2">Not Connected</h3>
                    <p className="text-muted-foreground mb-4">
                      Configure your Figma credentials first
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label>Select Project</Label>
                      {loadingProjects ? (
                        <Skeleton className="h-10 w-full" />
                      ) : errorProjects ? (
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-destructive text-destructive text-sm">
                          <AlertCircle className="h-4 w-4" />
                          Failed to load projects
                        </div>
                      ) : (
                        <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
                          <SelectTrigger data-testid="select-project">
                            <SelectValue placeholder="Choose a project" />
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
                    <Button
                      onClick={handleRender}
                      disabled={!selectedProjectId || renderMutation.isPending}
                      className="w-full gap-2"
                      data-testid="button-render"
                    >
                      {renderMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Rendering...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Render to Figma
                        </>
                      )}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Renders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {loadingFrames ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-14 w-full" />
                    ))}
                  </div>
                ) : figmaFrames.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">No renders yet</p>
                ) : (
                  figmaFrames.slice(0, 5).map((frame) => (
                    <div
                      key={frame.id}
                      className="flex items-center gap-3 p-3 rounded-lg border"
                      data-testid={`render-${frame.id}`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{frame.name}</p>
                        <p className="text-xs text-muted-foreground">{frame.pageName}</p>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="config" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Figma API Configuration</CardTitle>
              <CardDescription>Connect your Figma account to enable frame rendering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="figma-token">Figma Personal Access Token</Label>
                <Input
                  id="figma-token"
                  type="password"
                  placeholder="figd_xxxx..."
                  value={figmaToken}
                  onChange={(e) => setFigmaToken(e.target.value)}
                  data-testid="input-figma-token"
                />
                <p className="text-xs text-muted-foreground">
                  Get your token from Figma Settings &rarr; Account &rarr; Personal access tokens
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="figma-file-id">Figma File ID</Label>
                <Input
                  id="figma-file-id"
                  placeholder="abc123..."
                  value={figmaFileId}
                  onChange={(e) => setFigmaFileId(e.target.value)}
                  data-testid="input-figma-file-id"
                />
                <p className="text-xs text-muted-foreground">
                  Found in your Figma file URL: figma.com/file/[FILE_ID]/...
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={handleConnect} className="gap-2" data-testid="button-connect-figma">
                  <Figma className="h-4 w-4" />
                  {isConnected ? "Reconnect" : "Connect"}
                </Button>
                {isConnected && (
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Connected
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frame Templates</CardTitle>
              <CardDescription>Pre-built templates with 50+ screens organized by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {frameTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="p-4 rounded-lg border hover-elevate cursor-pointer"
                    data-testid={`template-${template.id}`}
                  >
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-xs font-bold text-primary">{template.icon}</span>
                    </div>
                    <h3 className="font-medium text-sm">{template.name}</h3>
                    <p className="text-xs text-muted-foreground">{template.pages} pages</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>How to set up and use the Figma Agent</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <h3>1. Get Your Figma Token</h3>
              <ol>
                <li>Go to Figma Settings &rarr; Account</li>
                <li>Scroll to "Personal access tokens"</li>
                <li>Click "Create new token"</li>
                <li>Copy and save securely</li>
              </ol>

              <h3>2. Get Your File ID</h3>
              <ol>
                <li>Open your Figma file</li>
                <li>Look at the URL: figma.com/file/[FILE_ID]/...</li>
                <li>Copy the FILE_ID portion</li>
              </ol>

              <h3>3. Configure in Settings</h3>
              <p>Enter your token and file ID in the Configuration tab above.</p>

              <h3>4. Start Rendering</h3>
              <p>Use natural language prompts to create or update frames.</p>

              <Separator className="my-6" />

              <h3>API Reference</h3>
              <p>Endpoint: <code>POST /api/figma/render</code></p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`{
  "projectId": "your-project-id",
  "figmaFileId": "your-file-id",
  "frameIds": ["optional-frame-ids"]
}`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
