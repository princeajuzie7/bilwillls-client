"use client"
import React from 'react'
import { CustomDialog } from "@/helper/CustomDialog";
import { CustomDialogTypes } from '@/types/CustomTypes';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Drawer } from "vaul";
import { PublicProfile } from '@/components/settings';

export function EditProfile() {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 backdrop-blur-sm   bg-opacity-40 " />
      <Drawer.Content className="bg-[#191919] flex flex-col rounded-t-[10px] h-[80%] mt-32 max-h-[96%] !border-t-0 fixed bottom-0 left-0 right-0 z-[60] border-none focus-within:bg-[#191919]">
        <div className="pt-4 bg-[#191919] rounded-t-[10px] flex-1">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#3EE783] lg:mb-8 m-0 cursor-grabbing" />
          <TabGroup className=" w-full flex  flex-col lg:flex-row gap-5 lg:px-0 pl-3  lg:pl-20">
            <div className=" lg:py-4 py-0 w-full lg:w-1/4 md:block">
              <div className="sticky flex flex-col gap-2 lg:p-4  p-0 text-sm lg:border-r lg:border-indigo-100   border-r-0 top-12">
                <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                <TabList className={`flex lg:flex-col flex-row gap-3 pr-4 `}>
                  <Tab className="flex items-center lg:px-3 px-0 py-0 lg:py-2.5 font-semibold lg:outline-1 outline-none  data-[selected]:border-b border-b-[#3EE783] lg:data-[selected]:bg-[#3EE783] hover:border-b-[#3EE783] rounded-none lg:rounded-full lg:hover:border lg:hover:rounded-full w-full text-center ">
                    Pulic Profile
                  </Tab>
                  <Tab className="flex items-center lg:px-3 px-0 py-0 lg:py-2.5 font-semibold lg:outline-1 outline-none  data-[selected]:border-b border-b-[#3EE783] lg:data-[selected]:bg-[#3EE783] hover:border-b-[#3EE783] rounded-none lg:rounded-full lg:hover:border lg:hover:rounded-full w-full">
                   Settings
                  </Tab>
                  <Tab className="flex items-center lg:px-3 px-0 py-0 lg:py-2.5 font-semibold lg:outline-1 outline-none  data-[selected]:border-b border-b-[#3EE783] lg:data-[selected]:bg-[#3EE783] hover:border-b-[#3EE783] rounded-none lg:rounded-full lg:hover:border lg:hover:rounded-full w-full">
                    Notifications
                  </Tab>
                  <Tab className="flex items-center lg:px-3 px-0 py-0 lg:py-2.5 font-semibold lg:outline-1 outline-none  data-[selected]:border-b border-b-[#3EE783] lg:data-[selected]:bg-[#3EE783] hover:border-b-[#3EE783] rounded-none lg:rounded-full lg:hover:border lg:hover:rounded-full w-full">
                    Billing
                  </Tab>
                </TabList>
              </div>
            </div>

            <TabPanels className={` w-full  overflow-y-scroll lg:h-[550px]  h-[500px] `}>
              <TabPanel className="h-full w-full">
                <PublicProfile />
              </TabPanel>
              <TabPanel>Content 2</TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 4</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
}
