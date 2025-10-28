const TMDB_API_KEY = process.env.TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type TmdbSearchResult = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export async function getSeriesDetails(title: string) {
  try {
    const searchUrl = `${API_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`;
    const searchResponse = await fetch(searchUrl);
    
    if (!searchResponse.ok) {
      console.error(`Error fetching TMDB data for "${title}": ${searchResponse.statusText}`);
      return createFallbackData(title);
    }
    
    const searchData = await searchResponse.json();
    const result: TmdbSearchResult | undefined = searchData.results[0];

    if (result) {
      return {
        id: result.id,
        title: result.name,
        description: result.overview || 'No description available.',
        imageUrl: result.poster_path ? `${IMAGE_BASE_URL}${result.poster_path}` : `https://picsum.photos/seed/${result.id}/400/600`,
        imageHint: 'tv series poster',
      };
    } else {
      console.warn(`No TMDB results found for "${title}"`);
      return createFallbackData(title);
    }
  } catch (error) {
    console.error(`An error occurred while fetching details for "${title}":`, error);
    return createFallbackData(title);
  }
}

function createFallbackData(title: string) {
    const fallbackId = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return {
        id: fallbackId,
        title: title,
        description: 'Could not fetch details for this series.',
        imageUrl: `https://picsum.photos/seed/${fallbackId}/400/600`,
        imageHint: 'tv series'
    };
}
