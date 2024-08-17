import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LogOut } from "lucide-react";
import NavigationLink from "./NavigationLink";

const Sidebar = () => {
  return (
    <div className=" border-r bg-muted hidden h-[100vh] md:block max-w-[13rem] fixed  z-50 ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={"/logo.png"} width={40} height={30} alt="Login " />
            <span className="">E-Commerce</span>
          </Link>
        </div>
        <NavigationLink />
        <div
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary
               text-muted-foreground cursor-pointer
          }`}
        >
          <LogOut />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
