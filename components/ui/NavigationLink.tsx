"use client";
import Link from "next/link";
import React from "react";
// import { sidebarData } from "./sidebarData";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/constant/SidebarData";

const NavigationLink = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {sidebarData.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${"hover:text-blue-400"} hover:bg-primary/10 ${
                isActive ? "bg-blue-600" : "text-muted-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavigationLink;
