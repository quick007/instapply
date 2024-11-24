import React from "react";
import { Menu } from "@headlessui/react";

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
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 flex items-center"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
            </svg>
        </div>
    );
}

const FlyoutNotification = ({children, NotificationContent}) => {
    const [open, setOpen] = useState(false);

    const showFlyout = NotificationContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <a className="relative text-white">
                {children}
            </a>
            {showFlyout}
        </div>
    )
}
