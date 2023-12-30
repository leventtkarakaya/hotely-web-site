"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-12">
            {/* logo % text */}
            <div className="xl:w-[470px] mb-6 xl:mb-0 ">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                corrupti nisi perferendis in nobis consequatur numquam
                repellendus doloribus dolores? Ratione!
              </p>
            </div>
            {/* navigation & contact */}
            <div className="flex  flex-1  xl:gap-x-26 xl:ml-32">
              {/* navigation */}
              <div className="flex-1">
                <h4 className="mb-6">Navigaiton</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Anasayfa</Link>
                  </li>
                  <li>
                    <Link href="/">Bul Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link href="/">Bize Ulaşın</Link>
                  </li>
                </ul>
              </div>
              {/* contact*/}
              <div className="flex-1 xl:flex-col xl:ml-36">
                <h4 className="mb-6">Bize Ulaşın</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+90 212 555 25 36</li>
                  <li>windoxlive_love@gmail.com</li>
                  <li>hotely.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyriht text */}
        <div className="flex items-center justify-center h-20 flex-col flex-1">
          <p>Copyright &copy; 2023. All rights reserved</p>
          <Socials containerStyle="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
