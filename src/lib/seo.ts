import type { Metadata } from "next";

export const SITE_URL = "https://matecito.dev";
export const SITE_NAME = "Matecito";

export const DEFAULT_DESCRIPTION =
  "Creamos, lanzamos y hacemos crecer servicios, productos y proyectos desde Pergamino, Argentina. Conocé Matecito Studio, Commerce y sus proyectos propios.";

export const OG_IMAGE = {
  url: "/banner/bannerfb.png",
  width: 1200,
  height: 630,
  alt: "Matecito — Creamos. Lanzamos. Hacemos crecer.",
};

export function pageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  absoluteTitle,
  ogImage = OG_IMAGE,
}: {
  title?: string;
  description?: string;
  path: string;
  absoluteTitle?: string;
  ogImage?: typeof OG_IMAGE;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = absoluteTitle ?? (title ? `${title} — Matecito` : SITE_NAME);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_AR",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage.url],
    },
  };
}
