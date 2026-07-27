import type { Artwork } from './types'

export interface MediaItem {
  url: string
  type: 'image' | 'video' | 'gif'
  label?: string
}

export interface ArtworkSet {
  id: string
  title: string
  category: 'process' | 'animation' | 'background' | 'icon' | 'illustration' | 'pet'
  description: string
  year?: string
  client?: string
  role?: string
  tags?: string[]
  featured?: boolean
  items: MediaItem[]
}

// ─── SETS DE ILUSTRACIÓN Y PROCESO (CARRUSELES 1-4) ──────────────────────────
export const ILLUSTRATION_PROCESS_SETS: ArtworkSet[] = [
  {
    id: 'illus-set-1',
    title: 'Comisión gatuna',
    category: 'pet',
    description: 'Retrato de mascota hecho para un cliente que deseaba poder recordarla eternamente. Bajo esa premisa, busqué reinventar el significado de fallecer y mezclar los elementos para conectar con el cliente.',
    year: '2025',
    role: 'Ilustración digital y animación sutil',
    tags: ['boceto', 'lineart', 'color', 'animal & creatures', 'After Effects', 'Clip Studio Paint', 'Animation'],
    featured: true,
    items: [
      { url: '/gallery/Carrusel1_Final.mp4', type: 'video', label: 'Render e Intro Animada' },
      { url: '/gallery/Carrusel1_3.png', type: 'image', label: 'Color Base e Iluminación' },
      { url: '/gallery/Carrusel1_2.png', type: 'image', label: 'Delineado y Bloques' },
      { url: '/gallery/Carrusel1_1.png', type: 'image', label: 'Boceto / Composición' }
    ]
  },
  {
    id: 'illus-set-2',
    title: 'Guardián del más allá',
    category: 'pet',
    description: 'Comisión para recordar a los amigos que ya no están, pero que siempre se mantendrán cerca de un modo u otro. Fue un encargo por medio de la plataforma VGen para público extranjero',
    year: '2025',
    role: 'Ilustración digital',
    tags: ['boceto', 'lineart', 'color', 'animal & creatures', 'Clip Studio Paint'],
    featured: true,
    items: [
      { url: '/gallery/Carrusel2_1.png', type: 'image', label: 'Ilustración final' },
      { url: '/gallery/Carrusel2_3.png.png', type: 'image', label: 'Lineart' },
      { url: '/gallery/Carrusel2_2.png.png', type: 'image', label: 'Colores base' }
    ]
  },
  {
    id: 'illus-set-3',
    title: 'Keyla',
    category: 'illustration',
    description: 'Ilustración del personaje del mismo nombre para una jugadora de Dungeons & Dragons. La pieza fue realizada en Clip Studio Paint siguiendo sus referencias y ayudándola a mejorar su diseño, para posterior animación en After Effects.',
    year: '2025',
    role: 'Ilustración digital y Animación sutil',
    tags: ['boceto', 'lineart', 'color', 'humanoid', 'Clip Studio Paint', 'After Effects', 'Animation'],
    featured: false,
    items: [
      { url: '/gallery/Animacion6_3.mp4', type: 'video', label: 'Resultado final' },
      { url: '/gallery/Animacion6_1.png', type: 'image', label: 'Lineart & Colores base' },
      { url: '/gallery/Animacion6_2.jpg', type: 'image', label: 'Estática' },
      { url: '/gallery/Speed.mp4', type: 'video', label: 'Proceso' }
    ]
  },
  {
    id: 'illus-set-4',
    title: 'Un poco más de mi peludo trabajo',
    category: 'pet',
    description: '¡Usa las flechas o desliza para ver más comisiones en las que he trabajado!',
    year: '2023 - 2026',
    role: 'Ilustración',
    tags: ['Color', 'Retratos', 'Clip Studio Paint', 'Animation'],
    featured: false,
    items: [
      { url: '/gallery/Cats_1.webp', type: 'image'},
      { url: '/gallery/Cats_2.webp', type: 'image'},
      { url: '/gallery/Cats_3.jpg', type: 'image'},
      { url: '/gallery/Cats_4.webp', type: 'image'},
      { url: '/gallery/Cats_5.webp', type: 'image'},
      { url: '/gallery/Cats_6.webp', type: 'image'},
      { url: '/gallery/Cats_7.webp', type: 'image'},
    ]
  }
]

// ─── SETS DE ANIMACIÓN 2D (SETS 1-6) ──────────────────────────────────────────
export const ANIMATION_SETS: ArtworkSet[] = [
  {
    id: 'anim-set-1',
    title: 'Fate Strange Fake — Capítulo 02',
    category: 'animation',
    description: 'Mi trabajo fue solamente color, esto previo a la correción de mi superior.',
    year: '2025',
    role: 'Color',
    tags: ['frame-by-frame', 'japan', 'anime'],
    featured: false,
    items: [
      { url: '/gallery/animecreditos_1.jpg', type: 'image', label: 'Créditos' },
    ]
  },
  {
    id: 'anim-set-3',
    title: 'Kimi to Boku — Capítulo 03',
    category: 'animation',
    description: 'Mi trabajo fue solamente color, esto previo a la correción de mi superior.',
    year: '2025',
    role: 'Color',
    tags: ['frame by frame', 'japan', 'anime'],
    featured: false,
    items: [
      { url: '/gallery/animecreditos_2.jpg', type: 'image', label: 'Créditos' },
    ]
  },
  {
    id: 'anim-set-4',
    title: 'Alice at the End of Her Life',
    category: 'animation',
    description: 'Mi trabajo fue solamente color.',
    year: '2025',
    role: 'Color',
    tags: ['frame by frame', 'videojuego', 'trailer'],
    featured: false,
    items: [
      { url: '/gallery/Animacion3_2.mp4', type: 'video', label: 'Previa' },
      { url: '/gallery/animecreditos_3.jpg', type: 'image', label: 'Créditos' },
    ]
  },
    {
    id: 'anim-set-5',
    title: 'Video musical "Reloj de Arena" por Aki Chan',
    category: 'animation',
    description: 'Auxiliar en color',
    year: '2025',
    role: 'Color',
    tags: ['frame by frame', 'video musical', 'youtuber'],
    featured: false,
    items: [
      { url: '/gallery/animecreditos_4.jpg', type: 'image', label: 'Créditos' },
    ]
  },
]

// ─── SETS DE FONDOS DE ANIMACIÓN / LANDSCAPES ────────────────────────────────
export const BACKGROUND_SETS: ArtworkSet[] = [
  {
    id: 'illus-set-5',
    title: 'Recreaciones',
    category: 'illustration',
    description: 'El Jardín de las Palabras (Rain Garden) y Frieren Beyond the Journey\'s End,',
    year: '2024',
    role: 'Estudio de Fondos',
    tags: ['rain', 'makoto-shinkai', 'nostalgic', 'environments'],
    featured: false,
    items: [
      { url: '/gallery/Landscape2_2.jpg', type: 'image', label: 'Fase de Valores y Luces' },
      { url: '/gallery/Landscape2_1.jpg', type: 'image', label: 'Fondo Renderizado Final' },
      { url: '/gallery/Landscape1_1.jpg', type: 'image', label: 'Bloqueo de Capas' },
      { url: '/gallery/Landscape1_2.jpg', type: 'image', label: 'Detalles y Letreros Neón' },
      { url: '/gallery/Landscape1_Final.gif', type: 'gif', label: 'Fondo Animado Final' }
    ]
  },
  {
    id: 'illus-set-6',
    title: 'Un vistazo al futuro',
    category: 'illustration',
    description: 'Ilustración de fondos para un director de animación en formación. El proyecto postulado para inversionistas en la Universidad Autónoma de Querétaro',
    year: '2025',
    role: 'Fondo de Animación',
    tags: ['cosmic horror', 'space', 'colorful', 'enviroment'],
    featured: true,
    items: [
      { url: '/gallery/Carrusel4_1.png', type: 'image', label: 'Resultado final' },
      { url: '/gallery/Carrusel4_2.jpg', type: 'image', label: 'Colores base' },
      { url: '/gallery/Carrusel4_3.jpg', type: 'image', label: 'Boceto' },
      { url: '/gallery/Landscape3_1.png', type: 'image', label: 'Resultado final' }
    ]
  },
  
]


// ─── STICKERS Y OTROS ASSETS ─────────────────────────────────────────────────
export const STICKER_SETS: ArtworkSet[] = [
  {
    id: 'sticker-set-1',
    title: 'Stickers e iconos ready-to-print',
    category: 'illustration',
    description: 'Assets listos para impresión y redes sociales. Incluye stickers de estilo street-art, iconos y gráficos de alto contraste. Desde lo tierno hasta lo meme',
    year: '2024',
    role: 'Diseño de Vector / Stickers',
    tags: ['stickers', 'die-cut', 'vectorial', 'neon', 'icons'],
    featured: true,
    items: [
      { url: '/gallery/Stick_1.png', type: 'image', },
      { url: '/gallery/Stick_2.png', type: 'image',},
      { url: '/gallery/Sticker_2.png', type: 'image',},
      { url: '/gallery/Stick_4.png', type: 'image',},
      { url: '/gallery/Stick_5.png', type: 'image',}
    ]
  }
]

// ─── OTROS ASSETS (ESTÁTICOS / SUELTOS) ──────────────────────────────────────
export const ADDITIONAL_WORKS: Artwork[] = [
  //—los primeros dos son videos, hay que revisar —
  {
    id: 'anim-set-6',
    title: 'Comisión de OC animada',
    category: 'animation',
    description: 'Personaje: Amelia Jackman',
    imageUrl: '/gallery/michigaleria_1.mp4',
    year: '2025',
    client: null,
    role: 'Comisión',
    tags: 'Commission, Original Character, Simple Animation',
    featured: false,
    order: 10
  },
  {
    id: 'illus-set-8',
    title: 'Emote de OC animado',
    category: 'animation',
    description: 'Pieza de la serie de gatos cósmicos lista para fondos de pantalla.',
    imageUrl: '/gallery/michigaleria_2.mp4',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Victoria',
    category: 'illustration',
    description: 'Diseño e Ilustración de personaje original',
    imageUrl: '/gallery/michigaleria_4.jpg',
    year: '2025',
    client: null,
    role: 'Colores base',
    tags: 'humanoid, original character, illustration',
    featured: false,
    order: 11
  },
    {
        id: 'estatico-1',
    title: 'Victoria',
    category: 'illustration',
    description: 'Diseño e Ilustración de personaje original',
    imageUrl: '/gallery/michigaleria_3.jpg',
    year: '2025',
    client: null,
    role: 'Resultado final',
    tags: 'humanoid, original character, illustration',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Práctica de escenario e integración de personaje',
    category: 'Escala de grises',
    description: '#Landscape #Cats #Illustration',
    imageUrl: '/gallery/michigaleria_7.jpg',
    year: '2024',
    client: null,
    role: 'Ilustración',
    tags: 'cats, landscape, illustration',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Práctica de escenario e integración de personaje',
    category: 'illustration',
    description: '#Landscape #Cats #Illustration',
    imageUrl: '/gallery/michigaleria_6.jpg',
    year: '2024',
    client: null,
    role: 'Ilustración',
    tags: 'cats, landscape, illustration',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Jaguar Girl',
    category: 'Escala de grises',
    description: 'Comisión de retrato de personaje original, estilo semirealista',
    imageUrl: '/gallery/michigaleria_9.jpg',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Retrato cósmico estático',
    category: 'illustration',
    description: 'Comisión de retrato de personaje original, estilo semirealista',
    imageUrl: '/gallery/michigaleria_8.jpg',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  },
      {
    id: 'estatico-1',
    title: 'Planos de Juanburgueso',
    category: 'Diseño de Personaje',
    description: 'Se re diseño toda la idea del cliente y se establecieron guías de uso para adaptar a futuro su mascota',
    imageUrl: '/gallery/michigaleria_11.png',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Mavuika',
    category: 'illustration',
    description: 'FanArt del personaje de Genshin Impact, Mavuika. Ilustración digital semirealista con inspiración anime',
    imageUrl: '/gallery/michigaleria_5.jpeg',
    year: '2024',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  },
    {
    id: 'estatico-1',
    title: 'Emote animado',
    category: 'animacion',
    description: 'Perfecto para plataformas digitales como twitch o discord',
    imageUrl: '/gallery/michigaleria_10.gif',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  }
]

// Todo el array unificado para compatibilidad anterior si fuera necesario
export const WORKS: Artwork[] = [
  ...ADDITIONAL_WORKS,
  // Creamos elementos para compatibilidad de búsqueda
  ...ILLUSTRATION_PROCESS_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[s.items.length - 1].url, // usará el último item como imagen de cover
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...ANIMATION_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[0].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...BACKGROUND_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[s.items.length - 1].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),

  ...STICKER_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[0].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  }))
]

export function computeStats() {
  const categoryCounts: Record<string, number> = {
    process: ILLUSTRATION_PROCESS_SETS.length,
    animation: ANIMATION_SETS.length,
    background: BACKGROUND_SETS.length,
    icon: STICKER_SETS.length,
    illustration: ILLUSTRATION_PROCESS_SETS.length // 👈 Cambiamos el 2 por esto
  }
  
  return {
    stats: {
      worksCount: String(
        ILLUSTRATION_PROCESS_SETS.length +
        ANIMATION_SETS.length +
        BACKGROUND_SETS.length +
        STICKER_SETS.length +
        ADDITIONAL_WORKS.length
      )
    },
    categoryCounts
  }
}
