"use client"
import React from 'react'
import { Navbar, BottomNav } from "@/components";
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '@/selectors/AuthSelectors';
import { useRouter } from 'next/navigation';

import Signedhoc from '@/helper/Signedhoc';

  function Layout({ children }: { children: React.ReactNode }) {


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

// const LayoutSignedIn = Signedhoc(layout);

export default Layout;