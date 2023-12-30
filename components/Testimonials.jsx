"use client";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper modules
import { Pagination } from "swiper/modules";
//swiper style
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia eligendi voluptatibus necessitatibus nihil vel ut soluta at nostrum saepe.",
    personName: "Robert Rene",
    location: "İstanbul",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia eligendi voluptatibus necessitatibus nihil vel ut soluta at nostrum saepe.",
    personName: "David Brom",
    location: "Muğla",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-soft_green xl:h-[880px]">
      <div className=" mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24 ">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=""
                    className="p-2 xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold ">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
