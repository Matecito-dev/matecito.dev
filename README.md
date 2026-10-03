# Matecito

Sitio de **Matecito**, una marca independiente que crea, lanza y hace crecer servicios,
productos y proyectos desde Pergamino, Argentina. El sitio vive en `matecito.dev`.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Marca Matecito y sus áreas Studio, Commerce y Proyectos |
| `/studio` | Resumen de servicios digitales |
| `/landing-pages` | Servicio, precio, alcance y preguntas frecuentes |
| `/commerce` | Presentación del área, en preparación |
| `/proyectos` | Proyectos propios de Matecito, hoy Zezen |
| `/privacidad` | Políticas de privacidad de las aplicaciones |

La ruta anterior `/labs` redirige a la portada.

## Deploy

El sitio está pensado para deploy en **Vercel**. No requiere variables de entorno.

```bash
npm run build
```

## Repo

https://github.com/Matecito-dev/matecito.dev
