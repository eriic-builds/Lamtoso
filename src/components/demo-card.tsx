// DemoCard — a reusable card component for the demo page
//
// This is what a 21st.dev component looks like structurally:
// - Props define what data the component accepts
// - JSX defines what it renders
// - Tailwind classes define the styling
// - cn() merges class names cleanly
//
// To use it: <DemoCard title="Hello" description="World" />

import { cn } from "@/lib/utils";

interface DemoCardProps {
  title: string;
  description: string;
  // "badge" is optional (note the ?)
  badge?: string;
  // className lets the parent override or extend styles
  className?: string;
}

export function DemoCard({ title, description, badge, className }: DemoCardProps) {
  return (
    <div
      className={cn(
        // Base card styles
        "rounded-xl border border-gray-800 bg-gray-900 p-6",
        // Smooth hover effect
        "transition-all duration-200 hover:border-gray-700 hover:bg-gray-800",
        // Allow the parent to add extra classes
        className
      )}
    >
      {/* Badge — only renders if the badge prop is provided */}
      {badge && (
        <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 mb-3">
          {badge}
        </span>
      )}

      <h3 className="font-semibold text-white text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
    </div>
  );
}
