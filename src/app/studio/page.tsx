import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Megaphone, Sparkles } from "lucide-react";
import { LANDING_WHATSAPP_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Studio",
  description:
    "Servicios digitales de Matecito Studio: diseño y desarrollo web, marketing, SEO, contenidos y automatizaciones.",
  path: "/studio",
});

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Desarrollo web",
    body: "Diseñamos y desarrollamos landing pages rápidas, responsive y pensadas para generar consultas.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    body: "Campañas, SEO y contenidos definidos según el objetivo y el alcance de cada proyecto.",
  },
  {
    icon: Sparkles,
    title: "Automatizaciones",
    body: "Conectamos herramientas y simplificamos tareas repetitivas para que el trabajo fluya mejor.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <p className="section-label mb-6 text-accent">01 / Matecito Studio</p>
            <h1 className="max-w-3xl text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-ink">
              Ideas digitales,
              <br />
              <span className="text-accent">bien construidas.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Acompañamos a profesionales, comercios y emprendimientos a construir su
              presencia online, atraer consultas y mejorar sus procesos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/landing-pages" className="btn-primary">
                Ver landing pages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={LANDING_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Consultar por WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="border-l-2 border-accent pl-6 md:ml-8 md:pl-8" aria-label="Enfoque de Studio">
            <p className="section-label mb-5 text-ink">Del objetivo a algo concreto</p>
            <ol className="divide-y divide-line border-y border-line">
              {[
                ["01", "Entendemos", "Qué necesitás y para quién."],
                ["02", "Construimos", "Una solución clara, útil y cuidada."],
                ["03", "Publicamos", "La dejamos lista para que empiece a trabajar."],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-4 py-4">
                  <span className="pt-0.5 font-mono text-xs text-accent">{number}</span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Desarrollo digital desde Pergamino, Buenos Aires.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-paper-warm py-16 md:py-24" aria-labelledby="studio-services-title">
        <div className="page-wrap">
          <div className="mb-10 max-w-2xl">
            <p className="section-label mb-4 text-accent">Cómo podemos ayudar</p>
            <h2 id="studio-services-title" className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Herramientas distintas.
              <br />
              El mismo objetivo: avanzar.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, body }, index) => (
              <article key={title} className="border border-line bg-surface p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="bg-accent-soft p-3 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-ink-faint">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-14 md:py-20">
        <div className="page-wrap flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-label mb-3 text-accent">Un buen primer paso</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Una página que trabaje por tu negocio.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
              Conocé el paquete de landing pages, su alcance y las preguntas frecuentes.
            </p>
          </div>
          <Link href="/landing-pages" className="btn-primary w-fit">
            Ver el servicio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
