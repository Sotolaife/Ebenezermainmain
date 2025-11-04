export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageId: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Dreams',
    description: 'A journey into the subconscious, where abstract forms and colors collide to create a dreamlike landscape. This piece explores the fluid nature of memory and imagination.',
    imageId: 'artwork-1',
    featured: true,
  },
  {
    id: '2',
    title: 'Golden Hour',
    description: 'Inspired by the warm, fleeting light of sunset, this painting captures a moment of perfect tranquility and beauty. It serves as a reminder to cherish the present.',
    imageId: 'artwork-2',
    featured: true,
  },
  {
    id: '3',
    title: 'Mind\'s Labyrinth',
    description: 'This piece visualizes the complexity of human thought. The intricate patterns and pathways represent the process of navigating challenges and finding clarity.',
    imageId: 'artwork-3',
    featured: true,
  },
  {
    id: '4',
    title: 'Resilience',
    description: 'Crafted from salvaged materials, this sculpture symbolizes strength in the face of adversity. Its sharp angles and solid structure represent an unbreakable spirit.',
    imageId: 'artwork-4',
  },
  {
    id: '5',
    title: 'Chromatic Flow',
    description: 'A vibrant explosion of color that celebrates energy and movement. The piece is intended to evoke joy and a sense of liberation.',
    imageId: 'artwork-5',
  },
  {
    id: '6',
    title: 'Urban Echoes',
    description: 'Reflecting the chaotic beauty of city life, this artwork blends industrial textures with flashes of neon light, capturing the pulse of the metropolis.',
    imageId: 'artwork-6',
  },
  {
    id: '7',
    title: 'Silent Contemplation',
    description: 'A minimalist composition that invites viewers into a state of quiet reflection. The empty space is as important as the marks on the canvas, encouraging a pause.',
    imageId: 'artwork-7',
  },
  {
    id: '8',
    title: 'Digital Soul',
    description: 'Exploring the intersection of humanity and technology, this piece questions the nature of consciousness in an increasingly digital world.',
    imageId: 'artwork-8',
  },
  {
    id: '9',
    title: 'Nature\'s Cipher',
    description: 'An abstract interpretation of natural patterns, from the veins of a leaf to the branching of rivers. It is a tribute to the hidden codes within the natural world.',
    imageId: 'artwork-9',
  },
];
