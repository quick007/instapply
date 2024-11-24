'use client'

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";

const notifications = [
    { id: 1, message: "Job application recieved!" },
    { id: 2, message: "You have a new message from an employer." },
    { id: 3, message: "Job application recieved!" },
    { id: 4, message: "CLOSING SOON: apply to this position now!" },
];

export default function NotificationCenter() {
    return (
        <div>
            {/* Bell Icon */}
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
            <FlyoutNotification NotificationContent={<NotificationContent></NotificationContent>}></FlyoutNotification>
        </div>
    );
}

const NotificationContent = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">You have no new notifications.</h3>
            </div>
        </div>
    )
}

const FlyoutNotification = ({NotificationContent } : {NotificationContent: React.ReactNode}) => {
    const [open, setOpen] = useState(false);

    const showFlyout = NotificationContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
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
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};