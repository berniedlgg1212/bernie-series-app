import Image from 'next/image';
import { allSeries } from '@/lib/series-data';
import { Rating } from '@/components/Rating';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const topSeries = allSeries
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 font-headline">
        Top 5 Series
      </h1>
      <div className="space-y-8">
        {topSeries.map((series, index) => (
          <Card
            key={series.id}
            className="overflow-hidden animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <div className="grid md:grid-cols-3 gap-0 md:gap-6">
              <div className="md:col-span-1 relative h-60 md:h-auto">
                <Image
                  src={series.imageUrl}
                  alt={`Poster for ${series.title}`}
                  fill
                  className="object-cover"
                  data-ai-hint={series.imageHint}
                />
              </div>
              <div className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl font-headline">
                      {series.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="text-lg font-bold text-primary shrink-0"
                    >
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="pt-2">
                    <Rating rating={series.rating} />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{series.description}</CardDescription>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
