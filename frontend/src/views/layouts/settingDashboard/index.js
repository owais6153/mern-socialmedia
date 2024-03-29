import { Dialog, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "../BaseLayout";
import Header from "components/shared/header";
import Chat from "views/components/chat";
export default function SettingDashBoard({ nav }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header />
      <BaseLayout>
        <div className="flex min-h-full">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#F7F7F7] pb-4 pt-5">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>

                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                      <nav className="px-2">
                        <div className="space-y-1">{nav}</div>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                  {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}

          <div className="hidden lg:fixed lg:inset-y-0 lg:top-16 lg:flex lg:w-64 bg-[#F5F5F5] pl-6 pt-1">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div
              className="flex min-h-0 flex-1 flex-col"
              style={{ width: "-webkit-fill-available" }}
            >
              <div className="flex flex-1 flex-col overflow-y-auto">{nav}</div>
            </div>
          </div>
          <div className="flex w-0 flex-1 flex-col lg:pl-64">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b lg:hidden bg-white">
              <button
                type="button"
                className="border-r border-gray-200 px-4  outline-none lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <main className="flex-1 bg-[#F7F7F7] min-h-screen">
              {<Outlet />}
            </main>
          </div>
        </div>
        <Chat />
      </BaseLayout>
    </>
  );
}
