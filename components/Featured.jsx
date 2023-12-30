"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-28 relative  rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]"
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left">
        <Image
          src="/featured/icon.svg"
          width={73}
          height={83}
          alt=""
          className="xl:mr-[50px]"
        />
        <h2 className="flex-1 text-soft_green leading-relaxed font-extrabold text-2xl  ">
          1 dakikadan kısa sürede harika bir oda rezervasyonu yapın.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lüks bir otel, konforlu odaları, muhteşem manzaraları, lezzetli
          yemekleri ve kaliteli hizmetiyle unutulmaz bir konaklama deneyimi
          sunar. Dinlenmek ve keyifli vakit geçirmek için ideal bir seçenektir.
        </p>
      </div>
    </motion.section>
  );
};
export default Featured;
