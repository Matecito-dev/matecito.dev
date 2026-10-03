import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "Matecito.dev — Studio digital desde Argentina",
  description:
    "Comunidades, videojuegos, productos digitales y landing pages construidos desde Pergamino, Argentina.",
  path: "/",
});

const SERVICE_FEATURES = [
  "Diseño a medida",
  "WhatsApp integrado",
  "Publicación incluida",
];

const STUDIO_STEPS = [
  { number: "01", title: "Entender", body: "Partimos de una necesidad concreta." },
  { number: "02", title: "Construir", body: "Diseñamos y desarrollamos con intención." },
  { number: "03", title: "Aprender", body: "Compartimos el proceso y mejoramos." },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="page-wrap grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div className="reveal">
            <p className="section-label mb-6 flex items-center gap-3 text-accent">
              <span className="h-2 w-2 bg-accent" aria-hidden="true" />
              Studio digital · Pergamino, Argentina
            </p>
            <h1 className="max-w-3xl text-[clamp(3.25rem,8vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-ink">
              Construimos
              <br />
              <span className="text-accent">en público.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Creamos plataformas, comunidades y juegos desde Pergamino. Ideas reales,
              trabajo visible y productos que crecen con su gente.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/landing-pages" className="btn-primary">
                Conocer el servicio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/labs" className="btn-ghost">
                Ver cómo trabajamos
              </Link>
            </div>
          </div>

          <aside className="reveal reveal-delay-1 border-l-2 border-accent pl-6 md:ml-8 md:pl-8" aria-label="Cómo trabaja el estudio">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="section-label text-ink">Cómo construimos</p>
              <span className="font-mono text-xs text-ink-faint">01—03</span>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {STUDIO_STEPS.map((step) => (
                <li key={step.number} className="flex items-start gap-4 py-4">
                  <span className="pt-0.5 font-mono text-xs text-accent">{step.number}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold tracking-tight text-ink">{step.title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{step.body}</p>
                  </div>
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

      <section aria-label="Sobre el estudio" className="border-b border-line bg-paper-warm">
        <div className="page-wrap grid gap-5 py-6 sm:grid-cols-3 sm:gap-8">
          {[
            { label: "Qué hacemos", value: "Productos digitales" },
            { label: "Dónde", value: "Pergamino, Argentina" },
            { label: "Cómo", value: "En público, paso a paso" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`flex items-baseline justify-between gap-4 sm:block ${index > 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}`}
            >
              <p className="section-label text-[0.625rem]">{item.label}</p>
              <p className="text-sm font-medium text-ink sm:mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-surface" aria-labelledby="service-title">
        <div className="page-wrap grid gap-10 py-16 md:grid-cols-[1fr_0.72fr] md:items-center md:py-24">
          <div>
            <p className="section-label mb-4 text-accent">01 / Servicio web</p>
            <h2 id="service-title" className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Tu negocio merece una web que trabaje por él.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Diseñamos landing pages rápidas y claras para profesionales, comercios y
              emprendimientos. Enfocadas en contar lo importante y generar consultas.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 md:ml-8 md:pl-8">
            <p className="section-label">Precio de lanzamiento</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              $50.000 <span className="font-mono text-sm font-normal text-ink-muted">ARS</span>
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
              {SERVICE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/landing-pages" className="btn-primary mt-6">
              Conocer el servicio
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm" aria-labelledby="process-title">
        <div className="page-wrap grid gap-8 py-16 md:grid-cols-[0.85fr_1.15fr] md:items-start md:py-24">
          <div>
            <p className="section-label mb-4 text-accent">02 / El proceso</p>
            <h2 id="process-title" className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Sin humo.
              <br />
              Con proceso visible.
            </h2>
          </div>
          <div className="max-w-2xl text-base leading-relaxed text-ink-muted md:pt-9 md:text-lg">
            <p>
              Cada proyecto nace de una necesidad real: una ciudad, una comunidad de
              jugadores, un mundo por conquistar. Compartimos decisiones, errores y avances
              mientras construimos.
            </p>
            <p className="mt-5">
              Labs es nuestro taller: probamos ideas y herramientas antes de convertirlas
              en productos.
            </p>
            <Link href="/labs" className="btn-ghost mt-7">
              Entrar a Labs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
