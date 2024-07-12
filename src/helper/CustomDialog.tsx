import {Dialog, DialogPanel, DialogPanelProps, DialogTitle, Description} from "@headlessui/react"
import React from 'react'
import { CustomDialogTypes } from "@/types/CustomTypes";

export  function CustomDialog({ isOpen, setIsOpen, children, Tittle }: CustomDialogTypes) {
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm items-center justify-center p-4 ">
          <DialogPanel className="max-w-lg space-y-4 border bg-gray-600 rounded-md p-12">
            <DialogTitle className="font-bold">{Tittle}</DialogTitle>
            <Description>{children}</Description>
            {/* <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p> */}
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
