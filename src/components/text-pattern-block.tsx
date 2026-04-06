import React from "react";

interface TextPatternBlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "cyan";
}

export function TextPatternBlock({
  title,
  subtitle,
  children,
  variant = "default"
}: TextPatternBlockProps) {
  const panelClass = variant === "cyan" ? "panel-cut panel-cut-cyan" : "panel-cut";
  const accentClass = variant === "cyan" ? "text-(--color-cyan)" : "text-(--color-accent)";

  return (
    <article className={`${panelClass} space-y-6`}>
      <header className="space-y-1">
        <p className={`text-[10px] uppercase tracking-[0.4em] ${accentClass}`}>
          {subtitle || "Pattern Block"}
        </p>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-(--color-heading)">
          {title}
        </h3>
      </header>
      <div className="space-y-4 text-sm leading-relaxed text-(--color-text)/90 md:text-base md:leading-8">
        {children}
      </div>
    </article>
  );
}
