import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FolderKanban,
  Wand2,
  Download,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Image,
  Layers,
} from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/shared/schema";

const quickActions = [
  { label: "New Project", icon: FolderKanban, href: "/projects", color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20" },
  { label: "Generate Asset", icon: Wand2, href: "/generator", color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20" },
  { label: "Export Design", icon: Download, href: "/export", color: "bg-green-500/10 text-green-500 dark:bg-green-500/20" },
];

export default function Dashboard() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const stats = [
    { label: "Total Projects", value: projects.length.toString(), icon: FolderKanban, change: `${projects.length} total` },
    { label: "Assets Generated", value: "-", icon: Image, change: "Generate in Studio" },
    { label: "Figma Frames", value: "-", icon: Layers, change: "Connect Figma" },
    { label: "Exports", value: "-", icon: Download, change: "Export ready" },
  ];

  const recentProjects = projects.slice(0, 3);

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "Recently";
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your work.</p>
        </div>
        <Link href="/projects">
          <Button className="gap-2" data-testid="button-new-project">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          [1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-4 w-24" />
              </CardContent>
            </Card>
          ))
        ) : (
          stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your recently updated projects</CardDescription>
            </div>
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="gap-1" data-testid="button-view-all-projects">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg border">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))}
              </div>
            ) : recentProjects.length === 0 ? (
              <div className="text-center py-8">
                <FolderKanban className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="font-medium mb-2">No projects yet</h3>
                <p className="text-sm text-muted-foreground mb-4">Create your first project to get started</p>
                <Link href="/projects">
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Project
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-lg border hover-elevate cursor-pointer"
                    data-testid={`project-${project.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                        <FolderKanban className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Updated {formatDate(project.updatedAt || project.createdAt)}
                        </p>
                      </div>
                    </div>
                    <Badge variant={project.status === "active" ? "default" : "secondary"}>
                      {project.status || "draft"}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Jump into common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    data-testid={`quick-action-${action.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className={`h-8 w-8 rounded-md flex items-center justify-center ${action.color}`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    {action.label}
                  </Button>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Features</CardTitle>
              <CardDescription>What you can do</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-sm">AI Asset Generation</span>
                  <Badge variant="secondary" className="text-xs">DALL-E</Badge>
                </div>
                <Progress value={100} />
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-sm">Figma Integration</span>
                  <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                </div>
                <Progress value={60} />
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-sm">No-Code Export</span>
                  <Badge variant="secondary" className="text-xs">4 platforms</Badge>
                </div>
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
