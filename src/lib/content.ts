export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  wordmark: string;
  images: ProjectImage[];
}

export const WHATSAPP_NUMBER = "542477699586";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero contactar con Matecito"
)}`;

export const LANDING_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero consultar por la landing page de $50.000 ARS"
)}`;

export const PROJECTS: Project[] = [
  {
    id: "zezen",
    title: "Zezen",
    description:
      "Una plataforma de entrenamiento para organizar rutinas, registrar actividad y seguir tu progreso, solo o junto a tu gimnasio.",
    href: "https://www.zezen.app",
    category: "Producto digital · Fitness",
    wordmark: "/proyectos/zezen/zezen-wordmark.png",
    images: [
      {
        src: "/proyectos/zezen/daily-home.webp",
        alt: "Pantalla de inicio de Zezen con rutinas, actividad y progreso semanal",
        caption: "Tu espacio para entrenar a tu ritmo.",
      },
      {
        src: "/proyectos/zezen/weekly-progress.webp",
        alt: "Resumen semanal de entrenamientos, ejercicios y nuevos récords en Zezen",
        caption: "Tu semana, de un vistazo.",
      },
      {
        src: "/proyectos/zezen/quick-actions.webp",
        alt: "Acciones rápidas de Zezen para elegir una rutina, registrar actividad o buscar un gimnasio",
        caption: "Elegí cómo querés moverte.",
      },
    ],
  },
];
