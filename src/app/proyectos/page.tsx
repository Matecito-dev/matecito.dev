import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Próximamente",
  description:
    "Estamos preparando la próxima etapa de Matecito.dev. Pronto habrá novedades.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <section className="bg-surface">
      <div className="page-wrap grid min-h-[70vh] gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="section-label mb-6 text-accent">Espacio en pausa</p>
          <h1 className="max-w-3xl text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-ink">
            Lo próximo
            <br />
            <span className="text-accent">lo contamos pronto.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            Estamos preparando una nueva etapa para Matecito.dev. Por ahora dejamos este
            espacio libre; cuando definamos qué sigue, lo vas a encontrar acá.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/labs" className="btn-primary">
              Explorar Labs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/" className="btn-ghost">
              Volver al inicio
            </Link>
          </div>
        </div>

        <aside className="border-l-2 border-accent pl-6 md:ml-8 md:pl-8" aria-label="Estado de la sección">
          <p className="section-label mb-5 text-ink">Estado de esta sección</p>
          <div className="border-y border-line py-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">01 / Actualización</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-ink">En preparación</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Sin fichas ni anuncios hasta tener claro el próximo paso.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
