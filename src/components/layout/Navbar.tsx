"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/landing-pages", label: "Landing pages" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/labs", label: "Labs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="page-wrap flex min-h-[4.5rem] items-center justify-between">
        <Link href="/" className="flex items-baseline gap-0">
          <span className="text-lg font-bold tracking-tight text-ink">matecito</span>
          <span className="text-lg font-bold tracking-tight text-accent">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors",
                active(link.href) ? "text-accent" : "text-ink-muted hover:text-ink"
              )}
            >
              {link.label}
              {active(link.href) && (
                <span className="absolute -bottom-[1.45rem] left-0 right-0 h-px bg-accent" />
              )}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-4 !py-2 text-xs"
          >
            Contacto
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line md:hidden"
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 bg-ink transition-transform", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-ink transition-opacity", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-ink transition-transform", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-line bg-surface px-4 py-3 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-line py-3 text-base font-medium last:border-0",
                active(link.href) ? "text-accent" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp mt-4 w-full justify-center"
          >
            Contacto por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
