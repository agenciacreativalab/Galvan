export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  gallery: string[];
  content: string[];
}

const engalinContent = [
  "Fundada por el chef, propietario, director creativo y finalista del Master Chef Marwan Badran, Engalin surgió de una vida vivida a través de culturas y disciplinas.",
  "Sofisticada en su arquitectura y rebelde en su espíritu, la propiedad se mueve fluidamente entre la intimidad interior y el exceso exterior.",
  "El reto consistía en diseñar una identidad que se moviera con la misma fluidez que la propia experiencia. Debía ser de estilo castillo y de inspiración francesa en sus cimientos, pero a la vez expresiva, generosa y llena de carácter.",
  "La identidad tenía que actuar como una fuerza unificadora, uniendo los muchos estados de ánimo de Engalin, desde el refinamiento tranquilo hasta la celebración exuberante.",
  "La paleta de colores proviene directamente de la cocina, con un pistacho fresco que hace referencia a los ingredientes locales de temporada que alimentan el menú cambiante y un rojo Pomegranate Sumac que hace referencia a los orígenes de Marwan en Oriente Medio."
];

const pgcContent = [
  "Componentes de la red eléctrica / PGC. Identidad de marca para un diseñador y fabricante líder de equipos esenciales para subestaciones eléctricas.",
  "Un enfoque profundamente técnico y meticuloso en la manufactura e industria. Redefinimos los estándares visuales del sector, apostando por la claridad, la precisión y la innovación.",
  "El desarrollo de la marca se enfocó en mostrar la solidez de los componentes y la confianza de las grandes redes eléctricas en sus equipos.",
  "Cada elemento visual, desde el logotipo hasta el manual de marca, refleja la energía en movimiento y la robustez de los materiales industriales.",
  "La paleta se centra en tonos metálicos y eléctricos que aseguran una presencia dominante y reconocible a nivel global."
];

const genericContent = [
  "Afrontamos este proyecto con la firme convicción de romper los esquemas tradicionales de la categoría. La marca necesitaba respirar aire fresco mientras mantenía sus valores fundacionales.",
  "Nuestro equipo se sumergió en una investigación profunda, entendiendo no solo a la audiencia, sino la esencia misma del producto. El resultado es un ecosistema visual expansivo.",
  "Se diseñaron múltiples puntos de contacto: desde plataformas digitales interactivas hasta experiencias tangibles en empaques y espacios comerciales.",
  "La tipografía seleccionada combina legibilidad con carácter, mientras que la dirección de arte fotográfica captura la honestidad y brutalidad del concepto principal.",
  "Finalmente, la marca no solo comunica lo que hace, sino cómo lo hace y por qué importa. Un trabajo integral que posiciona al cliente como líder indiscutible de su sector."
];

// Reutilizamos las 7 imágenes para la galería
const images = [
  "/portafolio/PORTAFOLIO-01.webp",
  "/portafolio/PORTAFOLIO-02.webp",
  "/portafolio/PORTAFOLIO-03.webp",
  "/portafolio/PORTAFOLIO-04.webp",
  "/portafolio/PORTAFOLIO-05.webp",
  "/portafolio/PORTAFOLIO-06.webp",
  "/portafolio/PORTAFOLIO-07.webp",
];

export const projects: Project[] = [
  {
    id: "castillo-engalin",
    title: "Castillo Engalin",
    subtitle: "Identidad de marca para un destino culinario y lugar de celebración cerca de Toulouse.",
    category: "Hostelería y Viajes",
    image: images[0],
    description: "Identidad de marca, señalización y gráficos ambientales para un destino culinario de primer nivel.",
    gallery: [images[1], images[2], images[3]],
    content: engalinContent,
  },
  {
    id: "red-electrica-pgc",
    title: "Red Eléctrica / PGC",
    subtitle: "Identidad de marca para un diseñador y fabricante líder de equipos esenciales.",
    category: "Manufactura e Industria",
    image: images[1],
    description: "Desarrollo de identidad para componentes esenciales en subestaciones eléctricas a nivel global.",
    gallery: [images[4], images[5], images[6]],
    content: pgcContent,
  },
  ...Array.from({ length: 13 }).map((_, i) => {
    const idNum = i + 3;
    const imgIndex = i % 7;
    return {
      id: `proyecto-${idNum}`,
      title: `Proyecto Estratégico ${idNum}`,
      subtitle: `Reposicionamiento integral y ecosistema digital para marca global.`,
      category: i % 2 === 0 ? "Identidad de Marca" : "Estrategia Digital",
      image: images[imgIndex],
      description: `Un trabajo extenso de branding y experiencia de usuario diseñado para generar impacto y conversión en el mercado actual.`,
      gallery: [
        images[(imgIndex + 1) % 7],
        images[(imgIndex + 2) % 7],
        images[(imgIndex + 3) % 7]
      ],
      content: genericContent,
    };
  })
];
