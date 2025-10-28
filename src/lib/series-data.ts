import { PlaceHolderImages } from './placeholder-images';

export type Series = {
  id: number;
  title: string;
  description: string;
  rating: number; // out of 5
  imageUrl: string;
  imageHint: string;
};

const seriesBaseData = [
  { id: 1, title: 'Cosmic Odyssey', description: 'A mind-bending journey through space and time, exploring the mysteries of the universe and our place within it.', rating: 5, imageId: 'series-1' },
  { id: 2, title: 'Neon Noir', description: 'In a rain-slicked, neon-drenched metropolis of 2088, a jaded detective hunts a phantom killer.', rating: 4, imageId: 'series-2' },
  { id: 3, 'title': 'The Last Kingdom', 'description': 'A medieval drama about a Saxon born noble but raised by Vikings.', rating: 5, imageId: 'series-3' },
  { id: 4, 'title': 'Café Comedians', 'description': 'A group of aspiring comedians navigate life, love, and laughter in a quirky coffee shop.', rating: 3, imageId: 'series-4' },
  { id: 5, 'title': 'Crown of Dragons', 'description': 'In a realm of magic and myth, rival houses vie for control of the Dragon Throne.', rating: 5, imageId: 'series-5' },
  { id: 6, 'title': 'Sunset Serenade', 'description': 'A chance encounter on a tropical island leads to a summer of romance and self-discovery.', rating: 2, imageId: 'series-6' },
  { id: 7, 'title': 'Vanguard', 'description': 'An elite soldier embarks on a globe-trotting mission to prevent a global catastrophe.', rating: 4, imageId: 'series-7' },
  { id: 8, 'title': 'The Alchemist\'s Secret', 'description': 'A young apprentice discovers a hidden world of ancient magic and forbidden knowledge.', rating: 4, imageId: 'series-8' },
  { id: 9, 'title': 'Code Blue', 'description': 'The high-stakes, emotional roller-coaster of life inside a bustling city hospital emergency room.', rating: 3, imageId: 'series-9' },
  { id: 10, 'title': 'Echoes of Earth', 'description': 'Centuries after a cataclysm, a young scavenger uncovers a secret that could change the fate of humanity.', rating: 4, imageId: 'series-10' }
];

export const allSeries: Series[] = seriesBaseData.map(series => {
  const image = PlaceHolderImages.find(p => p.id === series.imageId);
  if (!image) {
    // Fallback in case image is not found
    return {
      ...series,
      imageUrl: 'https://picsum.photos/seed/error/600/400',
      imageHint: 'placeholder',
    };
  }
  return {
    id: series.id,
    title: series.title,
    description: series.description,
    rating: series.rating,
    imageUrl: image.imageUrl,
    imageHint: image.imageHint,
  };
});
