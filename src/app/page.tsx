// This is the home page — it maps to the "/" route (http://localhost:3000)
// In Next.js App Router, every page.tsx file is a route.
//
// Notice how we import components from other files:
// - DemoCard is our own component (from src/components/)
// - Button is a shadcn/ui component (from src/components/ui/)

import { DemoCard } from "@/components/demo-card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-10">

        {/* Header section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Lamtoso
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A personal demo lab — learning Git, Next.js, and building with{" "}
            <a
              href="https://21st.dev"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              21st.dev
            </a>{" "}
            components.
          </p>

          {/* Button from shadcn/ui — try changing variant to "outline" or "ghost" */}
          <div className="flex gap-3 justify-center pt-2">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">View GitHub</Button>
          </div>
        </div>

        {/* Learning progress cards — using our DemoCard component */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Learning Progress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <DemoCard
              badge="Completed"
              title="Git & GitHub"
              description="Commits, branches, push/pull, and Pull Requests."
            />
            <DemoCard
              badge="In Progress"
              title="Next.js"
              description="Pages, components, routing, and the App Router."
            />
            <DemoCard
              badge="Coming Soon"
              title="21st.dev"
              description="Beautiful UI components ready to drop in."
            />
          </div>
        </div>

        {/* How to add a 21st.dev component */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 space-y-3">
          <h2 className="font-semibold text-white">How to add a 21st.dev component</h2>
          <ol className="text-gray-400 text-sm space-y-1 list-decimal list-inside">
            <li>Browse <a href="https://21st.dev" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">21st.dev</a> and find a component you like</li>
            <li>Copy the component code</li>
            <li>Create a new file in <code className="text-blue-300 bg-gray-800 px-1 rounded">src/components/</code></li>
            <li>Paste the code and import it in your page</li>
          </ol>
        </div>

      </div>
    </main>
  );
}
