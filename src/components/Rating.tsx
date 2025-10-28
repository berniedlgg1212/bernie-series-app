import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = {
  rating: number;
  className?: string;
  starClassName?: string;
};

export function Rating({ rating, className, starClassName }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground/30",
            starClassName
          )}
        />
      ))}
    </div>
  );
}
