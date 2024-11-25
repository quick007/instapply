"use client";

import { appliedPosting } from "./saveOrApply";
import { usePathname } from "next/navigation";

export default function ClickApply({ id }: { id: string}) {
    const pathname = usePathname();
    const isSelected = pathname.includes("applied")
    const fill = isSelected ? "black" : "none"
    return (
        <button className="w-32 flex justify-start" onClick={() => appliedPosting(!isSelected, id)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={fill}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </button>
    );
}