import React from "react";
import internal from "stream";
import AppCell from "./cell";

export default function ApplicationColumn({cells, children} : {cells: [], children: React.ReactNode}) {
    return (
        <main className={`text-primary-darkish mb-3 grow font-semibold py-1 px-4 flex flex-col gap-4`}>
            {children}
        </main>
    )
}