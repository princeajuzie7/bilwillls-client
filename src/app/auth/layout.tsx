"use client";
import React, { useState } from "react";
import NotSignedhoc from "@/helper/NotSignedhoc";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-10">
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}

const Layout = NotSignedhoc(layout)
export default Layout;
