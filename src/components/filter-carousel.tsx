


interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}


import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data
}: FilterCarouselProps) => {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    })


  }, [api])


  return (
    <>
      <div className="relative w-full">
        {/* left fade */}
        <div
          className={cn(
            "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
            current === 1 && "hidden"
          )}
        />
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            dragFree: true
          }}
          className="px-12 w-full">
          <CarouselContent className="-ml-3">
            {!isLoading && (
              <CarouselItem
                onSelect={() => onSelect(null)}
                className="pl-3 basis-auto"
              >
                <Badge
                  variant={!value ? "default" : "secondary"}
                  className="rounded-lg px-3 py-1 h-full text-sm cursor-pointer whitespace-nowrap"
                >
                  All
                </Badge>
              </CarouselItem>
            )}
            {isLoading && (
              Array.from({ length: 14 }).map((_, index) => (
                <CarouselItem

                  key={index}>
                  <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold">
                    &nbsp;
                  </Skeleton>
                </CarouselItem>
              ))
            )}
            {!isLoading && data.map((item) => (
              <CarouselItem
                onClick={() => onSelect(item.value)}
                key={item.value}
                className="pl-3 basis-auto"
              >
                <Badge
                  variant={value === item.value ? "default" : "secondary"}
                  className="rounded-lg px-3 py-1 h-full text-sm cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20 left-0" />
          <CarouselNext className="right-0 z-20" />

        </Carousel>
        {/* right fade */}

        <div
          className={cn(
            "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
            current === count && "hidden" //* if you reach the end  
          )}
        />
      </div>
    </>
  )
}