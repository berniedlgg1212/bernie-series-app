
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rating } from '@/components/Rating';
import type { Series } from '@/lib/series-data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type SeriesCardProps = {
  series: Series;
  style?: React.CSSProperties;
};

export function SeriesCard({ series, style }: SeriesCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className="overflow-hidden animate-fade-in opacity-0"
            style={style}
          >
            <div className="aspect-[2/3] relative">
              <Image
                src={series.imageUrl}
                alt={`Poster for ${series.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                data-ai-hint={series.imageHint}
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="truncate font-headline text-base">
                {series.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Rating rating={series.rating} />
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="max-w-[250px] sm:max-w-xs"
        >
          <p className="text-sm text-muted-foreground">{series.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
