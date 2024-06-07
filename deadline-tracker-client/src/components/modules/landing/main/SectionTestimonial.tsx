import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SectionTestimonial() {
  return (
    <section
      title="testimonial"
      className="flex flex-col justify-start items-center w-full gap-4"
    >
      <article className="flex flex-col gap-2 justify-start items-center">
        <h3 className="text-blue-700 font-semibold text-sm">TESTIMONIAL</h3>
        <h2 className="text-lg pt-2">Happy Customers</h2>
        <p className="mx-96 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          sint aspernatur error dolorum. Harum praesentium at quasi doloremque
          eligendi perspiciatis sed consequuntur dolore esse, nobis
        </p>
      </article>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl "
      >
        <CarouselContent className="animate-infinite-scroll" aria-hidden="true">
          {Array.from({ length: 11 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex flex-col justify-center items-start gap-4">
                  <CardDescription className="mx-6 mt-6">
                    Lorem ipsum dolor sit amet, consectetur aaaa adipisicing
                    elit.Quas repellendus quod aaaaaa mamam aaaaaa accusantium
                    id eligendi.
                  </CardDescription>
                  <CardContent className="flex items-center justify-center p-0 gap-3 mx-6 mb-6">
                    <Avatar className="w-fit">
                      <AvatarImage
                        src={`/assets/customer/customer${index + 1}.jpg`}
                        className="w-10 rounded-full"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-800 font-medium">
                      Quoc Minh
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
