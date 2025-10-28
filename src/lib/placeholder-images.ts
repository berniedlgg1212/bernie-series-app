import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

// This file is now mostly unused as we fetch images from TMDB, 
// but is kept for potential fallback or future use.
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
