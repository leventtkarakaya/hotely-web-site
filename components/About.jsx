"use client";
import React from "react";
import Image from "next/image";
import { inView, motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [ref, inView] = useInView({
    threshold: !isDesktopOrLaptop ? 0.9 : null,
  });

  console.log(isDesktopOrLaptop);
  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className=" md:ml-24 xl:ml-auto mx-2">
        <div className="xl:grid grid-cols-2 xl:gap-x-48 xl:mx-10">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image src={"/about/img2.png"} width={559} height={721} alt="" />
          </motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="md:max-w-[500px] xl:max-w-[500px]"
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              omnis ea nobis! Accusamus nesciunt perferendis vel modi ipsum ea
              voluptatibus labore odit odio sapiente, voluptatum necessitatibus,
              voluptatem dolor nulla minima?
            </p>
            {/* stats */}
            <div className=" my-5 xl:my-10 min-h-[35px] ">
              {inView && <Stats />}
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              cum ducimus animi! Maxime eum culpa autem quos quam reprehenderit
              officiis.
            </p>
            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
