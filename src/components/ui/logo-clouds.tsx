"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LOGOS } from "@/components/ui/logo-clouds-utils/logos";

export type LogoEntry = {
  icon: React.ReactNode;
  name?: string;
  id?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: string;
  subtitle?: string;
  interval?: number;
  stagger?: number;
  className?: string;
};

const DEFAULT_LOGOS: LogoEntry[] = LOGOS.map((l) => ({
  icon: (
    <l.Icon className="h-8 w-8" style={{ color: l.color }} aria-hidden="true" />
  ),
  name: l.name,
  id: l.name,
}));

function LogoItem({
  logo,
  index,
  isWaving,
}: {
  logo: LogoEntry;
  index: number;
  isWaving: boolean;
}) {
  return (
    <div
      aria-label={logo.name ?? "Logo"}
      style={{
        transitionDelay: isWaving ? `${index * 80}ms` : "0ms",
      }}
      className={cn(
        "flex w-20 shrink-0 cursor-default flex-col items-center gap-2 sm:w-24 transition-all duration-700 select-none",
        isWaving ? "opacity-30 blur-[2px] scale-95" : "opacity-100 blur-0 scale-100 hover:scale-110"
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 drop-shadow-sm">
        {logo.icon}
      </span>
      {logo.name && (
        <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-gray-500 sm:text-[12px]">
          {logo.name}
        </span>
      )}
    </div>
  );
}

export default function LogoCloudSwap({
  logos = DEFAULT_LOGOS,
  title = "Trusted by the best companies",
  subtitle = "The world's most ambitious teams build with our platform.",
  interval = 3500,
  className,
}: LogoCloudSwapProps) {
  const [waving, setWaving] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      setWaving(true);
      const reset = setTimeout(() => {
        setWaving(false);
      }, 900);
      return () => clearTimeout(reset);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <section
      className={cn("w-full bg-white px-4 py-16 sm:py-20 border-b border-gray-100", className)}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[16px] text-gray-500 font-normal">{subtitle}</p>
        )}
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
