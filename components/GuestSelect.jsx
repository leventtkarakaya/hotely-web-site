import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "./ui/select";
const GuestSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Kaç misafir?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Misafir Sayı</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default GuestSelect;
