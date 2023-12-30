"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
const DataPicker = () => {
  const [date, setDate] = useState();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"default"}
          className={cn(
            "w-full justify-between text-left font-medium",
            !date && "text-black"
          )}
        >
          {" "}
          {date ? format(date, "dd MMMM") : <span>Bir tarih seçin</span>}
          <CalendarIcon className="ml-2 h-5 w-4 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => setDate(newDate)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
export default DataPicker;
