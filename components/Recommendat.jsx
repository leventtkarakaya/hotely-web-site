"use client";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper modules
import { Autoplay } from "swiper/modules";
//swiper style
import "swiper/css";
// components
import { Button } from "./ui/button";
import Image from "next/image";

const recommendationData = [
  {
    name: "İstanbul Hotel",
    image: "/recommendation/istanbul.png",
    location: "İstanbul,Turkey",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae cum totam voluptates sapiente voluptatem beatae ipsum?",
    price: 45,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae",
      personName: "David Json",
    },
  },
  {
    name: "İzmir Hotel",
    image: "/recommendation/izmir.png",
    location: "İzmir,Turkey",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae cum totam voluptates sapiente voluptatem beatae ipsum?",
    price: 50,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae",
      personName: "Martin Lutter",
    },
  },
  {
    name: "Muğla Hotel",
    image: "/recommendation/mugla.png",
    location: "Muğla,Turkey",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae cum totam voluptates sapiente voluptatem beatae ipsum?",
    price: 60,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus temporibus similique molestiae.",
      personName: "Criston Back",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Recommendat = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="pb-12 xl:pt-[157px] bg-soft_green-secondary relative"
    >
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col sm:pl-[40px] xl:flex-row xl:pl-[100px] gap-y-14 xl:gap-y-0">
                  {/* text */}
                  <div className="max-w-[345px] xl:pt-8 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h1 className="mb-4 font-bold text-2xl text-black">
                      {hotel.name}
                    </h1>
                    <p className="text-soft_green text-lg mb-6 ">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.des}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[28px]">
                        Rezervasyon Yapın
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm">/Geçelik</span>
                      </div>
                    </div>
                  </div>
                  {/* iamge & testimonila */}
                  <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[680px]">
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={500}
                        alt="hotel"
                        quality={100}
                        className="xl:rounded-tl-[40px] xl:rounded-bl-[40px]"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl">
                        <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0  xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px] "
      />
    </motion.section>
  );
};
export default Recommendat;
