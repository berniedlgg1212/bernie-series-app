import { getSeriesDetails } from './tmdb';

export type Series = {
  id: number;
  title: string;
  description: string;
  rating: number; // out of 5
  imageUrl: string;
  imageHint: string;
  isFavorite: boolean;
};

const seriesList = [
  { title: 'Game of Thrones', isFavorite: true },
  { title: 'White Collar', isFavorite: true },
  { title: 'Suits', isFavorite: true },
  { title: 'SAS: Rogue Heroes', isFavorite: true }, // Adjusted title for better search
  { title: 'The Mandalorian', isFavorite: true },
  { title: 'Brooklyn Nine-Nine', isFavorite: true }, // Adjusted title
  { title: 'That \'70s Show', isFavorite: true },
  { title: 'Peaky Blinders', isFavorite: true },
  { title: 'Blindspot', isFavorite: true },
  { title: 'Shooter', isFavorite: false },
  { title: 'Better Call Saul', isFavorite: true },
  { title: 'Breaking Bad', isFavorite: true },
  { title: 'BoJack Horseman', isFavorite: true },
  { title: 'The Blacklist', isFavorite: true }, // Adjusted title
  { title: 'Orange Is the New Black', isFavorite: false },
  { title: 'The Good Place', isFavorite: false },
  { title: 'Bodyguard', isFavorite: true },
  { title: 'The Fresh Prince of Bel-Air', isFavorite: false },
  { title: 'Elite', isFavorite: true },
  { title: 'Club de Cuervos', isFavorite: true },
  { title: 'Designated Survivor', isFavorite: true },
  { title: 'Money Heist', isFavorite: true }, // Adjusted title
  { title: 'Stranger Things', isFavorite: false },
  { title: 'The Society', isFavorite: false },
  { title: '13 Reasons Why', isFavorite: false },
  { title: 'The Good Cop', isFavorite: false },
  { title: 'Sex Education', isFavorite: false },
  { title: 'How to Sell Drugs Online (Fast)', isFavorite: false },
  { title: 'Baby', isFavorite: true },
  { title: 'Manhunt: Unabomber', isFavorite: false },
  { title: 'Friends', isFavorite: false },
  { title: 'The I-Land', isFavorite: false },
  { title: 'Big Mouth', isFavorite: false },
  { title: 'F is for Family', isFavorite: false },
  { title: 'Lucifer', isFavorite: true },
  { title: 'Ragnarok', isFavorite: false },
  { title: 'Mr. Iglesias', isFavorite: false }, // Adjusted title
  { title: 'Luis Miguel: The Series', isFavorite: false },
  { title: 'K.C. Undercover', isFavorite: false },
  { title: 'Mindhunter', isFavorite: false },
  { title: 'Arrow', isFavorite: false },
  { title: 'The Flash', isFavorite: false },
  { title: 'DC\'s Legends of Tomorrow', isFavorite: false },
  { title: 'Supergirl', isFavorite: false },
  { title: 'Agents of S.H.I.E.L.D.', isFavorite: false },
  { title: 'Gossip Girl', isFavorite: false },
  { title: 'The Vampire Diaries', isFavorite: true },
  { title: 'The Originals', isFavorite: false },
  { title: 'The Client List', isFavorite: true },
  { title: 'You Me Her', isFavorite: false },
  { title: 'Locke & Key', isFavorite: false },
  { title: 'Toy Boy', isFavorite: false },
  { title: 'Unauthorized Living', isFavorite: true }, // Adjusted title
  { title: 'Too Hot to Handle', isFavorite: false },
  { title: 'Paradise PD', isFavorite: false },
  { title: 'Outer Banks', isFavorite: true },
  { title: 'Control Z', isFavorite: false },
  { title: 'Workin\' Moms', isFavorite: false },
  { title: 'The Witcher', isFavorite: false },
  { title: 'Dynasty', isFavorite: true },
  { title: 'Prison Break', isFavorite: true },
  { title: 'Cobra Kai', isFavorite: true },
  { title: 'WandaVision', isFavorite: false },
  { title: '9-1-1', isFavorite: false },
  { title: 'The Book of Boba Fett', isFavorite: true },
  { title: 'Obi-Wan Kenobi', isFavorite: false },
  { title: 'House of the Dragon', isFavorite: true },
  { title: 'Bridgerton', isFavorite: true },
  { title: 'Andor', isFavorite: true },
  { title: 'The Big Bang Theory', isFavorite: true },
  { title: 'Young Sheldon', isFavorite: false },
  { title: 'Ahsoka', isFavorite: false },
  { title: 'The O.C.', isFavorite: true },
  { title: 'The Night Manager', isFavorite: true },
  { title: 'The Rookie', isFavorite: true },
  { title: 'The Rookie: Feds', isFavorite: false },
  { title: 'The Gentlemen', isFavorite: false },
  { title: 'Star Wars: The Clone Wars', isFavorite: true },
  { title: 'The White Lotus', isFavorite: true },
  { title: 'The Last of Us', isFavorite: false },
  { title: 'Billions', isFavorite: true },
  { title: 'Alpha Males', isFavorite: true }, // Adjusted title
  { title: 'Lies and Deceit', isFavorite: false },
  { title: 'Hostage', isFavorite: false },
];

let allSeriesCache: Series[] | null = null;

export async function getAllSeries(): Promise<Series[]> {
  if (allSeriesCache) {
    return allSeriesCache;
  }

  const seriesPromises = seriesList.map(async (s) => {
    const details = await getSeriesDetails(s.title);
    return {
      ...details,
      isFavorite: s.isFavorite,
      rating: s.isFavorite ? 5 : 3, // Keep your original rating logic
    } as Series;
  });

  const resolvedSeries = await Promise.all(seriesPromises);
  const uniqueSeries = resolvedSeries.filter(
    (series, index, self) =>
      series.id > 0 && index === self.findIndex((s) => s.id === series.id)
  );
  
  allSeriesCache = uniqueSeries;
  return uniqueSeries;
}
