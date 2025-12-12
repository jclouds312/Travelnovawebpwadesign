import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Palette,
  Type,
  Maximize2,
  Copy,
  Download,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DesignTokens {
  colors: Record<string, string>;
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

export default function Tokens() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const { toast } = useToast();

  const { data: tokens, isLoading, isError } = useQuery<DesignTokens>({
    queryKey: ["/api/tokens"],
  });

  const copyToClipboard = (value: string, name: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(name);
    setTimeout(() => setCopiedToken(null), 2000);
    toast({ title: "Copied to clipboard" });
  };

  const exportTokens = () => {
    if (!tokens) return;
    const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design-tokens.json";
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Tokens exported", description: "design-tokens.json downloaded" });
  };

  const colorEntries = tokens ? Object.entries(tokens.colors) : [];
  const fontSizeEntries = tokens ? Object.entries(tokens.typography.fontSize) : [];
  const spacingEntries = tokens ? Object.entries(tokens.spacing) : [];
  const radiusEntries = tokens ? Object.entries(tokens.borderRadius) : [];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Design Tokens</h1>
          <p className="text-muted-foreground">Manage and export your design system tokens</p>
        </div>
        <Button onClick={exportTokens} disabled={isLoading || !tokens} className="gap-2" data-testid="button-export-tokens">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          Export JSON
        </Button>
      </div>

      {isError && (
        <Card>
          <CardContent className="flex items-center gap-3 p-6 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p>Failed to load design tokens. Please try again later.</p>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList>
          <TabsTrigger value="colors" className="gap-2" data-testid="tab-colors">
            <Palette className="h-4 w-4" /> Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="gap-2" data-testid="tab-typography">
            <Type className="h-4 w-4" /> Typography
          </TabsTrigger>
          <TabsTrigger value="spacing" className="gap-2" data-testid="tab-spacing">
            <Maximize2 className="h-4 w-4" /> Spacing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Core colors for the design system</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Skeleton key={i} className="h-28 w-full" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {colorEntries.map(([name, value]) => (
                    <div
                      key={name}
                      className="p-4 rounded-lg border space-y-3 hover-elevate cursor-pointer"
                      onClick={() => copyToClipboard(value, name)}
                      data-testid={`token-color-${name.toLowerCase()}`}
                    >
                      <div
                        className="h-16 rounded-md"
                        style={{ backgroundColor: value }}
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-sm capitalize">{name}</h3>
                          <p className="text-xs text-muted-foreground font-mono">{value}</p>
                        </div>
                        {copiedToken === name ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
              <CardDescription>Font sizes for the design system</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {fontSizeEntries.map(([name, size]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border"
                      data-testid={`token-type-${name.toLowerCase()}`}
                    >
                      <div
                        className="flex-1 capitalize"
                        style={{ fontSize: size }}
                      >
                        {name.replace("-", " ")}
                      </div>
                      <Badge variant="outline">{size}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Font Families</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : (
                tokens?.typography.fontFamily && Object.entries(tokens.typography.fontFamily).map(([name, family]) => (
                  <div key={name} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="text-lg" style={{ fontFamily: family }}>{family.split(",")[0]}</p>
                      <p className="text-sm text-muted-foreground capitalize">{name}</p>
                    </div>
                    <Badge variant="secondary">--font-{name}</Badge>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spacing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>Spacing values for consistent layouts</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-8 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {spacingEntries.map(([name, value]) => (
                      <div
                        key={name}
                        className="flex items-center gap-4"
                        data-testid={`token-spacing-${name}`}
                      >
                        <Badge variant="outline" className="w-12 justify-center">
                          {name}
                        </Badge>
                        <div
                          className="h-4 bg-primary rounded"
                          style={{ width: `calc(${value} * 16)` }}
                        />
                        <span className="text-sm text-muted-foreground font-mono">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Corner radius tokens</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {radiusEntries.map(([name, value]) => (
                      <div
                        key={name}
                        className="flex items-center gap-4"
                        data-testid={`token-radius-${name}`}
                      >
                        <Badge variant="outline" className="w-12 justify-center">
                          {name}
                        </Badge>
                        <div
                          className="h-12 w-12 bg-primary"
                          style={{ borderRadius: value }}
                        />
                        <span className="text-sm text-muted-foreground font-mono">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
