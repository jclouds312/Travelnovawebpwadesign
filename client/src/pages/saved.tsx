import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function Saved() {
  return (
    <Layout>
      <div className="px-6 pt-12 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">❤️</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">No Saved Trips Yet</h1>
        <p className="text-slate-500 mb-8 max-w-[250px]">
          Start exploring and save your favorite destinations for your next adventure.
        </p>
        <Button className="rounded-full px-8">Start Exploring</Button>
      </div>
    </Layout>
  );
}
