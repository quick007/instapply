import React from "react";
import internal from "stream";

export default function ApplicationColumn({children, size} : {children: React.ReactNode, size: string}) {
    let actualSize = "";
    switch(size) {
        case "sm":
            actualSize = "w-40";
            break;
        case "lg":
            actualSize = "w-64";
            break;
        case "fill":
            actualSize = "grow";
            break;
    }
    return (
        <main className={`text-primary-darkish mb-3 ${actualSize} font-semibold py-1 px-4`}>
            {children}
        </main>
    )
}