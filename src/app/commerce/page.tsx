import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Commerce",
  description:
    "Matecito Commerce está en preparación. Pronto compartiremos novedades sobre esta nueva área.",
  path: "/commerce",
});

export default function CommercePage() {
  return (
    <section className="bg-surface">
      <div className="page-wrap grid min-h-[70vh] gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="section-label mb-6 text-accent">02 / Matecito Commerce</p>
          <h1 className="max-w-3xl text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-ink">
            Nuevas ideas,
            <br />
            <span className="whitespace-nowrap text-accent">En preparación.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            Estamos preparando esta área para explorar productos y comercio online. Vamos a
            compartir novedades cuando tengamos claro qué ofrecer.
          </p>
          <Link href="/" className="btn-ghost mt-9">
            Volver a Matecito
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <aside className="border-l-2 border-accent pl-6 md:ml-8 md:pl-8" aria-label="Estado de Commerce">
          <span className="inline-flex bg-accent-soft p-4 text-accent">
            <ShoppingBag className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="section-label mb-4 mt-7 text-ink">Matecito Commerce</p>
          <div className="border-y border-line py-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">Estado</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">En preparación</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Sin catálogo ni productos anunciados por ahora.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
