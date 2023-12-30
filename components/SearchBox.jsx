"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import DataPicker from "./DataPicker";
import GuestSelect from "./GuestSelect";
const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[500px] xsm:min-w-[340px] bg-white max-h-max border border-outline rounded-xl p-10 "
    >
      {/* input,calender,data-picker */}
      <div className="mb-[20px]">
        {/* label */}
        <Label htmlFor="destination">Nereye ?</Label>
        {/* input,icon */}
        <div className="relative flex items-center mb-[20px]">
          <Input id="destination" placeholder="Varış Noktası" />
          <MapPin size={24} className="absolute right-5 text-black" />
        </div>
        {/* data-picker */}
        <div className="flex flex-col xl:flex-row gap-x-[100px] gap-y-7">
          {/* check-in */}
          <div className="flex flex-col flex-1 ">
            <Label>Giriş Tarih</Label>
            <DataPicker />
          </div>
          {/* check-out */}
          <div className="flex flex-col flex-1 ">
            <Label>Çıkış Tarih</Label>
            <DataPicker />
          </div>
        </div>
      </div>
      {/* select,checkbox,btn */}
      <div className="flex flex-col flex-1  ">
        {/* select */}
        <Label> Misafir </Label>
        <GuestSelect />
        <div>
          {/* checkbox */}
          <div className="flex items-center flex-1 gap-x-[15px] mt-6 ">
            <Checkbox id="terms" className="mb-3" />
            <Label htmlFor="terms">Check-in sırasında ödeme yapılsın mı?</Label>
          </div>
          <Button size="sm" className="w-full" variant="accent">
            Hotel Arayın
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
export default SearchBox;
