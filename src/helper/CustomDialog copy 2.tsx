import {
  Dialog,
  DialogPanel,
  DialogPanelProps,
  DialogTitle,
  Description,
  Transition,
  DialogBackdrop,
} from "@headlessui/react";
import React, {Fragment, useRef} from 'react'
import { CustomDialogTypes } from "@/types/CustomTypes";

export function CustomDialog({ isOpen, setIsOpen, children, Tittle }: CustomDialogTypes) {
    const modalref = useRef(null);
    const closeRef = useRef(null);
  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-[999]"
            onClose={setIsOpen}
            initialFocus={modalref}
            ref={closeRef}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0  backdrop-blur-sm   bg-black bg-opacity-40  " />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div
                className="flex min-h-full items-center justify-center p-4 text-center"
                ref={modalref}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium text-center capitalize leading-6 text-gray-900"
                    >
                      {Tittle}
                    </Dialog.Title>
                    {children}
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
