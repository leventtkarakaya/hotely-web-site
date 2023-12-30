import Image from "next/image";
import Nav from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import Socials from "./Socials";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={40} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full p-12">
          {/* Logo */}
          <Link href="/" className="mb-24">
            <Image
              src="/footer/logo.svg"
              width={100}
              height={46}
              alt=""
              priority
            />
          </Link>
          {/* Nav */}
          <Nav
            containerStyle="text-black"
            listStyle="flex flex-col gap-y-6 text-xl"
          />
          {/* Socials */}
          <Socials containerStyle="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
