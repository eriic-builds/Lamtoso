// This is the home page — it maps to the "/" route (http://localhost:3000)
// In Next.js App Router, every page.tsx file is a route

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        {/* Header */}
        <h1 className="text-5xl font-bold tracking-tight">
          Lamtoso
        </h1>
        <p className="text-gray-400 text-lg">
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

        {/* Status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-left">
          <StatusCard
            emoji="✅"
            title="Git basics"
            description="Commits, branches, push/pull"
          />
          <StatusCard
            emoji="🚧"
            title="Next.js"
            description="Pages, components, routing"
          />
          <StatusCard
            emoji="⏳"
            title="21st.dev"
            description="UI components & design"
          />
        </div>
      </div>
    </main>
  );
}

// A small reusable component defined in the same file
// In React, components are just functions that return JSX (HTML-like syntax)
function StatusCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
      <div className="text-2xl mb-2">{emoji}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );
}
