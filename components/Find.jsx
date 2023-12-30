"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    names: "İstanbul Hotel ",
    location: "İstanbul",
  },
  {
    image: "/find/hotel-2.png",
    names: "İstanbul Hotel ",
    location: "İstanbul",
  },
  {
    image: "/find/hotel-4.png",
    names: "İzmir Hotel ",
    location: "İzmir",
  },
  {
    image: "/find/hotel-3.png",
    names: "Muğla Hotel ",
    location: "Muğla",
  },
];

const Find = () => {
  return (
    <section className="py-12 xl:py-32">
      <div>
        {/* text */}
        <div className="text-center">
          <h2 className="mb-6 font-bold text-3xl">En iyi Hoteller</h2>
          <p className="max-w-[638px] mx-auto mb-8 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, praesentium quam! Tenetur vero nam, temporibus voluptas
            sequi nemo dignissimos a.
          </p>
          <div>
            <Button variant="accent" className="px-12 mb-14 xl:mb-28 ">
              Hepsini Gör
            </Button>
          </div>
        </div>
        {/* Hotel grid*/}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-y-10 xl:gap-y-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]  sm:grid-cols-2 "
        >
          {hotelData.map((hotel, index) => {
            return (
              <div
                key={index}
                className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto"
              >
                {" "}
                <Image
                  src={hotel.image}
                  width={270}
                  height={270}
                  alt=""
                  className="bg-cover bg-center bg-no-repeat"
                />
                <div className="p-8 font-bold text-xl">
                  <h4 className="transition-all ease-in duration-300 hover:text-white">
                    {hotel.names}
                  </h4>
                  <span className="transition-all ease-in duration-300 hover:text-white">
                    {hotel.location}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Find;
