"use client"

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

function NotificationContent() {
  return (
    <div className="w-40 bg-white border-black p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3>You have no new notifications.</h3>
      </div>
    </div>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className=" bg-primary-light h-20 flex justify-between items-center px-4">
        <Link href="/dashboard">
          <div className="flex items-center">
            <img src="/file.png" alt="Logo Image" className="h-20" />
            <h1 className="text-[#20283d] font-bold text-2xl">InstApply</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <FlyoutLink href="#" FlyoutContent={NotificationContent()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </FlyoutLink>
          <Link href="/dashboard/profile">
            <div className="rounded-full p-2 bg-primary-medium ml-5 mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </nav>
      {children}
    </main>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }: {children: React.ReactNode, href: string, FlyoutContent: React.ReactNode}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary-medium transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-3 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-black bg-white" />
          {/* <FlyoutContent /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
