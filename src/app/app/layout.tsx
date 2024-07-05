"use client"
import React from 'react'
import { Navbar, BottomNav } from "@/components";
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '@/selectors/AuthSelectors';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isauthenticated = useSelector(selectIsAuthenticated)
const router = useRouter()
  React.useEffect(() => {
    if (!isauthenticated) {
      router.push('/auth/signin') // Redirect to login page if not authenticated
    }
    return
  },[router, isauthenticated])

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
