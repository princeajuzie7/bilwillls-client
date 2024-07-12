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
      <Drawer.Content className="bg-[#191919] flex flex-col rounded-t-[10px] h-[80%] mt-32 max-h-[96%] fixed bottom-0 left-0 right-0 z-[60] border-none focus-within:bg-[#191919]">
        <div className="p-4 bg-[#191919] rounded-t-[10px] flex-1">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#3EE783] mb-8" />
          <TabGroup className=" w-full flex flex-col gap-5 px-3 md:px-16 lg:px-20 md:flex-row ">
            <div className=" py-4 md:w-1/3 lg:w-1/4 md:block">
              <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                <TabList className={`flex flex-col gap-3 pr-4 `}>
                  <Tab className=" flex items-center px-3 py-2.5 font-bold data-[selected]:bg-[#3EE783]  text-white border rounded-full w-full">
                    Pubic Profile
                  </Tab>
                  <Tab className="flex items-center px-3 py-2.5 font-semibold  data-[selected]:bg-[#3EE783] rounded-full hover:border hover:rounded-full w-full">
                    Account Settings
                  </Tab>
                  <Tab className="flex items-center px-3 py-2.5 font-semibold data-[selected]:bg-[#3EE783] rounded-full hover:border hover:rounded-full  w-full ">
                    Notifications
                  </Tab>
                  <Tab className="flex items-center px-3 py-2.5 font-semibold data-[selected]:bg-[#3EE783] rounded-full hover:border hover:rounded-full  w-full">
                    PRO Account
                  </Tab>
                </TabList>
              </div>
            </div>

       
            <TabPanels className={``}>
              <TabPanel className={`w-full `}>
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
