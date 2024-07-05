"use client"
import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import { VerifyPaasowrdTokenComp } from "@/components/auth";
export default function Page() {
  return (
    <div>
      <React.Suspense
        fallback={
          <div>
            {/* <HashLoader
              color="#2563EB"
              size={100}
              style={{ width: "100px", height: "100px" }}
            /> */}
            <RingLoader color="#3EE783" size={50} />
          </div>
        }
      >
        <VerifyPaasowrdTokenComp />
      </React.Suspense>
    </div>
  );
}
