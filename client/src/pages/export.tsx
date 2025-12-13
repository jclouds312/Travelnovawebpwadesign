import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  FileJson,
  CheckCircle2,
  Loader2,
  FolderKanban,
  Package,
  Circle,
  Smartphone,
  Globe,
  Wrench,
} from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Project, NocodeExport } from "@/shared/schema";

const platforms = [
  { id: "bubble", name: "Bubble", icon: Circle, description: "Visual programming platform" },
  { id: "flutterflow", name: "FlutterFlow", icon: Smartphone, description: "Flutter app builder" },
  { id: "weweb", name: "WeWeb", icon: Globe, description: "No-code frontend builder" },
  { id: "appsmith", name: "AppSmith", icon: Wrench, description: "Internal tool builder" },
];

export default function Export() {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [exportProgress, setExportProgress] = useState(0);
  const { toast } = useToast();

  const { data: projects = [], isLoading: loadingProjects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: exportHistory = [], isLoading: loadingHistory } = useQuery<NocodeExport[]>({
    queryKey: ["/api/projects", selectedProject, "exports"],
    enabled: !!selectedProject,
  });

  const exportMutation = useMutation({
    mutationFn: async (platform: string) => {
      const res = await apiRequest("POST", "/api/nocode/export", {
        projectId: selectedProject,
        platform,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects", selectedProject, "exports"] });
    },
    onError: (error: Error) => {
      toast({ title: "Export failed", description: error.message, variant: "destructive" });
    },
  });

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((p) => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleExport = async () => {
    if (!selectedProject || !selectedPlatforms || selectedPlatforms.length === 0) return;
    
    setExportProgress(0);
    const step = 100 / selectedPlatforms.length;
    
    for (let i = 0; i < selectedPlatforms.length; i++) {
      const platform = selectedPlatforms[i];
      if (!platform) continue;
      await exportMutation.mutateAsync(platform);
      setExportProgress((i + 1) * step);
    }
    
    toast({ title: "Export complete", description: `Exported to ${selectedPlatforms.length} platform(s)` });
    setExportProgress(0);
  };

  const isExporting = exportMutation.isPending;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">NoCode Export</h1>
        <p className="text-muted-foreground">Export your designs to popular no-code platforms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Export Configuration</CardTitle>
              <CardDescription>Select project and target platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Select Project</Label>
                {loadingProjects ? (
                  <Skeleton className="h-10 w-full" />
                ) : (
                  <Select value={selectedProject} onValueChange={setSelectedProject}>
                    <SelectTrigger data-testid="select-project">
                      <SelectValue placeholder="Choose a project to export" />
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

              <div className="space-y-3">
                <Label>Target Platforms</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedPlatforms.includes(platform.id)
                          ? "border-primary bg-primary/5"
                          : "hover-elevate"
                      }`}
                      onClick={() => togglePlatform(platform.id)}
                      data-testid={`platform-${platform.id}`}
                    >
                      <Checkbox
                        checked={selectedPlatforms.includes(platform.id)}
                        onCheckedChange={() => togglePlatform(platform.id)}
                      />
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <platform.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {isExporting && exportProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Exporting...</span>
                    <span>{Math.round(exportProgress)}%</span>
                  </div>
                  <Progress value={exportProgress} />
                </div>
              )}

              <Button
                onClick={handleExport}
                disabled={!selectedProject || selectedPlatforms.length === 0 || isExporting}
                className="w-full gap-2"
                data-testid="button-export"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Exporting...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Export to {selectedPlatforms.length || 0} Platform(s)
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
              <CardDescription>Each export contains the following</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FileJson, label: "Component JSON", desc: "Platform-specific components" },
                  { icon: FolderKanban, label: "Design Tokens", desc: "Colors, typography, spacing" },
                  { icon: Package, label: "Asset Bundle", desc: "Images and icons" },
                  { icon: CheckCircle2, label: "Documentation", desc: "Setup instructions" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{item.label}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Export History</CardTitle>
            <CardDescription>Your recent exports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {!selectedProject ? (
              <p className="text-sm text-muted-foreground text-center py-4">Select a project to view export history</p>
            ) : loadingHistory ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            ) : exportHistory.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">No exports yet</p>
            ) : (
              exportHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg border space-y-2"
                  data-testid={`export-history-${item.id}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm truncate">{item.fileName}</h3>
                    <Badge variant="secondary" className="shrink-0">
                      <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.platform}</span>
                  </div>
                  {item.downloadUrl && (
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  )}
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
