"use client"
import React from 'react'
import { CustomDialog } from "@/helper/CustomDialog";
import { CustomDialogTypes } from '@/types/CustomTypes';

import { Drawer } from "vaul";

export function EditProfile() {
  return (
   
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 backdrop-blur-sm   bg-opacity-40 " />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-[80%] mt-32 max-h-[96%] fixed bottom-0 left-0 right-0 z-[60]">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Drawer for React.
              </Drawer.Title>
              <p className="text-gray-600 mb-2">
                This component can be used as a Dialog replacement on mobile and
                tablet devices.
              </p>
              <p className="text-gray-600 mb-2">
                It comes unstyled and has gesture-driven animations.
              </p>
              <p className="text-gray-600 mb-6">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
              
            </div>
          </div>
        
        </Drawer.Content>
      </Drawer.Portal>
    
  );
}
