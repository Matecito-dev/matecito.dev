import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos propios",
  description:
    "Conocé los productos y proyectos que creamos en Matecito. Hoy: Zezen, una plataforma para entrenar y seguir tu progreso.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="page-wrap py-14 md:py-16">
          <p className="section-label mb-6 text-accent">Matecito · Lo que construimos</p>
          <h1 className="max-w-3xl text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-ink">
            Proyectos propios.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Ideas que toman forma en productos reales. Conocé lo que estamos creando desde
            Matecito.
          </p>
        </div>
      </section>

      {PROJECTS.map((project, index) => {
        const [coverImage, ...galleryImages] = project.images;

        return (
          <article key={project.id} aria-labelledby={`${project.id}-title`}>
            <section className="border-b border-line bg-surface">
              <div className="page-wrap grid gap-12 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-start md:py-16">
                <div>
                  <p className="section-label mb-6 text-accent">
                    Proyecto {String(index + 1).padStart(2, "0")} · {project.category}
                  </p>
                  <div className="relative mb-6 h-10 w-40">
                    <Image
                      src={project.wordmark}
                      alt={`${project.title} — identidad del proyecto`}
                      fill
                      sizes="160px"
                      className="object-contain object-left"
                      priority={index === 0}
                    />
                  </div>
                  <h2
                    id={`${project.id}-title`}
                    className="max-w-2xl text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-ink"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Conocer {project.title}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {coverImage && (
                  <figure className="relative mx-auto w-full max-w-lg overflow-hidden bg-paper-warm">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </figure>
                )}
              </div>
            </section>

            {galleryImages.length > 0 && (
              <section
                className="border-b border-line bg-paper-warm py-16 md:py-20"
                aria-label={`Imágenes de ${project.title}`}
              >
                <div className="page-wrap">
                  <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="section-label mb-3 text-accent">En detalle</p>
                      <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        {project.title}, por dentro.
                      </h3>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
                    >
                      Visitar proyecto
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="grid max-w-4xl gap-4 sm:grid-cols-2">
                    {galleryImages.map((image) => (
                      <figure key={image.src} className="border border-line bg-surface p-3">
                        <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="px-2 pb-1 pt-4 text-sm font-medium text-ink">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </article>
        );
      })}
    </>
  );
}
