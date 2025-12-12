import { awesomeAiData } from "@/data/awesome-ai";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function AwesomeAI() {
  const [search, setSearch] = useState("");

  const filteredData = awesomeAiData.map(category => ({
    ...category,
    tools: category.tools.filter(tool => 
      tool.name.toLowerCase().includes(search.toLowerCase()) || 
      tool.description.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Awesome AI</h1>
        <p className="text-muted-foreground">
          A curated list of awesome AI tools, frameworks, APIs, software and resources.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Input 
          placeholder="Search tools..." 
          className="max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredData.map((category) => (
        <div key={category.title} className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">{category.title}</h2>
            <Badge variant="secondary" className="rounded-full">
              {category.tools.length}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tools.map((tool) => (
              <Card key={tool.name} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center p-2 shrink-0 overflow-hidden">
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                    }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base font-semibold truncate">
                      {tool.name}
                    </CardTitle>
                    <a 
                      href={tool.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-muted-foreground hover:underline flex items-center gap-1 mt-1"
                    >
                      <Github className="w-3 h-3" />
                      Repository
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <CardDescription className="line-clamp-3 flex-1">
                    {tool.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No tools found matching "{search}"
        </div>
      )}
    </div>
  );
}
