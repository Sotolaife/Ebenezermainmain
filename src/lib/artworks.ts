
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
    description: 'A hauntingly beautiful portrait that captures a fleeting dream. The subject\'s gaze is both distant and piercing, drawing the viewer into a world of untold stories.',
    imageId: 'artwork-1',
    featured: true,
  },
  {
    id: '2',
    title: 'Golden Hour',
    description: 'An abstract piece that glows with the warmth of a setting sun. The interplay of light and shadow creates a sense of serene, almost sacred, energy.',
    imageId: 'artwork-2',
    featured: true,
  },
  {
    id: '3',
    title: 'Mind\'s Labyrinth',
    description: 'A complex and intricate composition that maps the chaotic beauty of the human mind. Each line and color represents a thought, a memory, a path taken or not.',
    imageId: 'artwork-3',
    featured: true,
  },
  {
    id: '4',
    title: 'Resilience',
    description: 'A powerful and defiant portrait that speaks to the strength of the human spirit. The subject\'s unflinching stare is a testament to enduring and overcoming.',
    imageId: 'artwork-4',
  },
  {
    id: '5',
    title: 'Chromatic Flow',
    description: 'A symphony of color and movement, this piece is a celebration of pure, unadulterated joy. The vibrant hues dance across the canvas in a visual melody.',
    imageId: 'artwork-5',
  },
  {
    id: '6',
    title: 'Urban Echoes',
    description: 'This artwork captures the raw, gritty energy of the city. The fragmented composition reflects the constant motion and overlapping stories of urban life.',
    imageId: 'artwork-6',
  },
  {
    id: '7',
    title: 'Silent Contemplation',
    description: 'A moment of quiet introspection is captured in this stunning portrait. The subject is lost in thought, inviting the viewer to pause and reflect.',
    imageId: 'artwork-7',
  },
  {
    id: '8',
    title: 'Digital Soul',
    description: 'A fusion of technology and humanity, this piece explores what it means to be alive in the digital age. The glitch-like effects hint at the beauty in imperfection.',
    imageId: 'artwork-8',
  },
  {
    id: '9',
    title: 'Nature\'s Cipher',
    description: 'An abstract interpretation of the hidden codes within nature. The organic shapes and earthy tones create a sense of mystery and wonder.',
    imageId: 'artwork-9',
  },
];
