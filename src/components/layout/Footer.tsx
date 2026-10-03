import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="page-wrap py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-2xl font-semibold tracking-tight text-ink">
              Matecito<span className="ml-1 text-sm font-medium text-accent">.dev</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Creamos, lanzamos y hacemos crecer servicios, productos y proyectos desde Pergamino, Argentina.
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Áreas</p>
            <ul className="space-y-2 text-sm font-medium text-ink-muted">
              <li><Link href="/studio" className="hover:text-accent">Studio</Link></li>
              <li><Link href="/commerce" className="hover:text-accent">Commerce</Link></li>
              <li><Link href="/proyectos" className="hover:text-accent">Proyectos</Link></li>
              <li><Link href="/landing-pages" className="hover:text-accent">Landing pages</Link></li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Matecito</p>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              Una marca independiente con base en Pergamino, Buenos Aires.
            </p>
            <a
              href="https://github.com/Matecito-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-ink-muted hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>

          <div>
            <p className="section-label mb-4">Contacto</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink-muted hover:text-accent"
            >
              WhatsApp
              <br />
              <span className="font-mono text-xs font-normal text-ink-faint">+54 2477 699586</span>
            </a>
            <Link href="/privacidad" className="mt-3 block text-sm text-ink-muted hover:text-accent">
              Privacidad
            </Link>
          </div>
        </div>

        <hr className="rule my-8" />

        <div className="flex flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Matecito · matecito.dev</span>
          <span className="font-mono">Hecho con mate 🧉 desde Pergamino</span>
        </div>
      </div>
    </footer>
  );
}
