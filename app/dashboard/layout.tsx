import Link from "next/link";
import SubnavTab from "./apps/components/subnavTab";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <nav className="w-screen bg-blue-50 h-20 mb-5">
                <img src = "/file.png" alt = "Logo Image" className="h-20"/>
            </nav>
            {children}
        </main>
    )
}