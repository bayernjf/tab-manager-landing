import { useEffect, useState } from "react";
import { dictionaries, type Lang } from "../i18n/ui";

type Phase = "before" | "after";

interface Props {
  lang?: Lang;
}

const beforeTabs = [
  { title: "GitHub - tab-manager/pull/142", color: "bg-slate-700" },
  { title: "How to focus - YouTube", color: "bg-red-500" },
  { title: "React docs: Hooks", color: "bg-blue-500" },
  { title: "Notion - Roadmap Q3", color: "bg-slate-800" },
  { title: "Medium: 深度长文", color: "bg-black" },
  { title: "Stack Overflow", color: "bg-orange-500" },
  { title: "Figma - Landing v2", color: "bg-purple-500" },
  { title: "Twitter / X", color: "bg-sky-500" },
  { title: "MDN - Array.from", color: "bg-blue-600" },
  { title: "GitHub - tab-manager/issues", color: "bg-slate-700" },
];

export default function HeroTabsDemo({ lang = "zh" }: Props) {
  const dict = dictionaries[lang];

  const groups = [
    {
      name: dict["demo.group.dev"],
      badge: dict["demo.badge.window1"],
      color: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800",
      accent: "text-blue-700 dark:text-blue-300",
      tabs: ["GitHub - tab-manager/pull/142", "React docs: Hooks", "Stack Overflow", "MDN - Array.from"],
    },
    {
      name: dict["demo.group.later"],
      badge: dict["demo.badge.reminder"],
      color: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800",
      accent: "text-amber-700 dark:text-amber-300",
      tabs: ["How to focus - YouTube", "Medium: 深度长文"],
    },
    {
      name: dict["demo.group.work"],
      badge: dict["demo.badge.window1"],
      color: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800",
      accent: "text-emerald-700 dark:text-emerald-300",
      tabs: ["Notion - Roadmap Q3", "Figma - Landing v2"],
    },
    {
      name: dict["demo.group.social"],
      badge: dict["demo.badge.window2"],
      color: "bg-sky-50 border-sky-200 dark:bg-sky-950/40 dark:border-sky-800",
      accent: "text-sky-700 dark:text-sky-300",
      tabs: ["Twitter / X", "GitHub - issues"],
    },
  ];

  const [phase, setPhase] = useState<Phase>("before");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => (p === "before" ? "after" : "before"));
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="hidden sm:inline">TAB GARDEN</span>
          <span
            className={`rounded-full px-2 py-0.5 ${
              phase === "after"
                ? "bg-garden-100 text-garden-700 dark:bg-garden-900/50 dark:text-garden-300"
                : "bg-slate-100 text-slate-500 dark:bg-slate-800"
            }`}
          >
            {phase === "after" ? dict["demo.phase.after"] : dict["demo.phase.before"]}
          </span>
        </div>
      </div>

      <div className="relative min-h-[280px] sm:min-h-[320px]">
        {/* Before: chaos */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            phase === "after" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div className="flex flex-col gap-2">
            {beforeTabs.map((tab, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm transition-transform dark:border-slate-700 dark:bg-slate-800"
                style={{ transform: `rotate(${(i % 3) - 1}deg) translateX(${(i % 2) * 4}px)` }}
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${tab.color}`} />
                <span className="truncate text-xs text-slate-700 dark:text-slate-200 sm:text-sm">
                  {tab.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* After: organized board */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            phase === "before" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            {groups.map((group) => (
              <div
                key={group.name}
                className={`flex flex-col rounded-xl border p-3 ${group.color}`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h4 className={`text-xs font-semibold uppercase tracking-wide ${group.accent}`}>
                    {group.name}
                  </h4>
                  <span className="truncate rounded bg-white/70 px-1.5 py-0.5 text-[10px] text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                    {group.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {group.tabs.map((tab, i) => (
                    <div
                      key={i}
                      className="truncate rounded-md bg-white/80 px-2 py-1 text-[11px] text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-400 dark:border-slate-800">
        <span>{dict["demo.footer.left"]}</span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-garden-500" />
          {dict["demo.footer.right"]}
        </span>
      </div>
    </div>
  );
}
