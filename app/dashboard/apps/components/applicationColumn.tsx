import React from "react";
import internal from "stream";

export default function ApplicationColumn({children, size} : {children: React.ReactNode, size: string}) {
    let actualSize = "";
    switch(size) {
        case "sm":
            actualSize = "w-300";
            break;
        case "lg":
            actualSize = "w-500";
            break;
        case "fill":
            actualSize = "grow";
            break;
    }
    return (
        <main className={`bg-primary-darkish text-primary-light mb-3 ${actualSize}`}>
            {children}
        </main>
    )
}