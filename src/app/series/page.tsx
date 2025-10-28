import { allSeries } from '@/lib/series-data';
import { SeriesCard } from '@/components/SeriesCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Series | SeriesSphere',
  description: 'A list of all series watched.',
};

export default function AllSeriesPage() {
  const sortedSeries = allSeries.sort((a,b) => a.title.localeCompare(b.title));
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 font-headline">
        All Watched Series
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {sortedSeries.map((series, index) => (
          <SeriesCard 
            key={series.id} 
            series={series}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
          />
        ))}
      </div>
    </div>
  );
}
