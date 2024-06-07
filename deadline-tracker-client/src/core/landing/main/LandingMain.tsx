"use client";
import * as React from "react";

import { Card, CardContent, CardDescription } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function LandingMain() {
  return (
    <main className="flex flex-col items-center justify-start gap-6 mx-40">
      <section
        title="about-us"
        className="flex  justify-center items-center gap-6"
      >
        <Image src="/checklist.svg" alt="" width={750} height={750} />
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-700 font-semibold text-sm">ABOUT US</h3>
          <h2 className="text-3xl mb-3">A Software Engineering Team</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim
            architecto laborum sit. Sint, quo nulla. Provident consectetur,
            sapiente aperiam, eligendi deserunt asperiores a architecto et
            beatae repudiandae maiores fuga? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Odit incidunt, qui reprehenderit,
            dolor tempora perspiciatis harum debitis voluptatum fugit
            consequuntur consectetur cupiditate dolores accusantium sed
            repellendus laudantium. Quasi, tempora at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            qui eligendi eos aliquam beatae ex voluptate officia enim fugit.
            Ipsum odio illum expedita reiciendis cum delectus incidunt,
            doloribus cupiditate nisi?
          </p>
        </article>
      </section>
      <section
        title="testimonial"
        className="flex flex-col justify-start items-center w-full gap-11"
      >
        <article className="flex flex-col gap-3 justify-start items-center">
          <h3 className="text-blue-700 font-semibold text-sm">TESTIMONIAL</h3>
          <h2 className="text-lg">Happy Customers</h2>
          <p className="mx-96 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sint aspernatur error dolorum. Harum praesentium at quasi doloremque
            eligendi perspiciatis sed consequuntur dolore esse, nobis, porro
            dolorum ipsa suscipit reiciendis?
          </p>
        </article>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent className="">
            {Array.from({ length: 11 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="flex flex-col justify-center items-start gap-4">
                    <CardDescription className="mx-6 mt-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas repellendus quod accusantium id eligendi odio amet
                      totam minima voluptates, deserunt dolor unde voluptas
                      facilis nisi pariatur nam voluptatibus a autem?
                    </CardDescription>
                    <CardContent className="flex items-center justify-center p-0 gap-3 mx-6 mb-6">
                      <Avatar className="w-fit">
                        <AvatarImage
                          src={`/assets/customer/customer${index + 1}.jpg`}
                          className="w-14 rounded-full"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h4 className="text-sm">Quoc Minh</h4>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
