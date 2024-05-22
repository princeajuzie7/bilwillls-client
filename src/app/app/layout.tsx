"use client"
import React from 'react'
import { Navbar, BottomNav } from "@/components";
export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <div className=" ">{children}</div>
        <div className=" w-full ">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
