import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LAB_NOTES } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Labs",
  description:
    "Bitácora de experimentos de Matecito.dev: infraestructura, inteligencia artificial y procesos de desarrollo en público.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="page-wrap py-16 md:py-24">
          <p className="section-label mb-5 text-accent">Taller · bitácora</p>
          <h1 className="max-w-3xl text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-ink">
            Labs<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Un cuaderno abierto de pruebas, aprendizajes y procesos del estudio. Acá
            compartimos lo que exploramos antes de convertirlo en algo más.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="page-wrap max-w-3xl">
          <p className="section-label mb-9 text-accent">Notas de laboratorio</p>
          <ol className="relative border-l border-line pl-8">
            {LAB_NOTES.map((note, index) => (
              <li
                key={note.title}
                className={`relative pb-12 ${index === LAB_NOTES.length - 1 ? "pb-0" : ""}`}
              >
                <span className="absolute -left-[2.05rem] top-1 h-3 w-3 border border-accent bg-paper" aria-hidden="true" />
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                  {note.date}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {note.title}
                  </h2>
                  <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                    {note.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{note.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-paper-warm py-16 md:py-20">
        <div className="page-wrap grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-label mb-3 text-accent">Próximamente</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Más notas desde el taller.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
              Vamos a sumar nuevas bitácoras con experimentos, decisiones y aprendizajes.
            </p>
          </div>
          <Link href="/landing-pages" className="btn-ghost w-fit">
            Ver servicio web
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
