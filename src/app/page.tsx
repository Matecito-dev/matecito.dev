import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, MapPin, Rocket, ShoppingBag } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "Matecito — Creamos. Lanzamos. Hacemos crecer.",
  description:
    "Servicios, productos y proyectos creados desde Pergamino, Argentina. Conocé Matecito Studio, Commerce y sus proyectos propios.",
  path: "/",
});

const AREAS = [
  {
    number: "01",
    name: "Studio",
    eyebrow: "Servicios digitales",
    description:
      "Diseño y desarrollo web, marketing digital y automatizaciones para negocios que quieren crecer.",
    href: "/studio",
    action: "Conocer Studio",
    icon: Code2,
  },
  {
    number: "02",
    name: "Commerce",
    eyebrow: "Productos y comercio",
    description:
      "Una nueva área para explorar productos físicos y comercio online.",
    href: "/commerce",
    action: "Ver qué estamos preparando",
    status: "En preparación",
    icon: ShoppingBag,
  },
  {
    number: "03",
    name: "Proyectos",
    eyebrow: "Proyectos propios",
    description:
      "Productos e ideas que desarrollamos desde Matecito. Hoy, conocé Zezen.",
    href: "/proyectos",
    action: "Ver los proyectos",
    icon: Rocket,
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="page-wrap grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div className="reveal">
            <p className="section-label mb-6 flex items-center gap-3 text-accent">
              <span className="h-2 w-2 bg-accent" aria-hidden="true" />
              Matecito · Pergamino, Argentina
            </p>
            <h1 className="max-w-3xl text-[clamp(2.75rem,6.25vw,5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-ink">
              Creamos.
              <br />
              <span className="text-accent">Lanzamos.</span>
              <br />
              <span className="whitespace-nowrap">Hacemos crecer.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Software, marcas, ecommerce y productos nacidos desde nuestro estudio en
              Argentina. Tres áreas, una misma curiosidad por hacer que las ideas avancen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#areas" className="btn-primary">
                Explorar Matecito
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/studio" className="btn-ghost">
                Hablemos de tu proyecto
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside
            className="reveal reveal-delay-1 border-l-2 border-accent pl-6 md:ml-8 md:pl-8"
            aria-label="Las áreas de Matecito"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="section-label text-ink">Una marca, tres áreas</p>
              <span className="font-mono text-xs text-ink-faint">01—03</span>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {AREAS.map((area) => (
                <li key={area.number} className="flex items-start gap-4 py-4">
                  <span className="pt-0.5 font-mono text-xs text-accent">{area.number}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold tracking-tight text-ink">{area.name}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{area.eyebrow}</p>
                  </div>
                  {area.status && (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {area.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              Hecho en Pergamino, Buenos Aires
            </p>
          </aside>
        </div>
      </section>

      <section id="areas" className="scroll-mt-20 border-b border-line bg-paper-warm py-16 md:py-24">
        <div className="page-wrap">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label mb-4 text-accent">Lo que hacemos</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Diferentes caminos.
                <br />
                Una misma casa.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-muted">
              Matecito reúne servicios, productos y proyectos propios para convertir ideas
              en algo que la gente pueda usar y disfrutar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.number}
                  href={area.href}
                  className="group flex min-h-72 flex-col border border-line bg-surface p-6 transition-colors hover:border-accent md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="bg-accent-soft p-3 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-ink-faint">{area.number}</span>
                  </div>
                  <p className="section-label mt-8">{area.eyebrow}</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{area.name}</h3>
                    {area.status && (
                      <span className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
                        {area.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {area.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {area.action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="page-wrap flex flex-col gap-5 border-l-2 border-accent pl-6 md:flex-row md:items-center md:justify-between md:pl-8">
          <div>
            <p className="section-label mb-3 text-accent">Desde Pergamino para donde haga falta</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Ideas que se convierten en proyectos reales.
            </h2>
          </div>
          <Link href="/studio" className="btn-ghost w-fit">
            Empezar una conversación
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
