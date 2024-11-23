import Link from "next/link";
import SubnavTab from "./components/subnavTab";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <nav className="w-screen bg-blue-50 h-20 mb-5">
                <img src = "/file.png" alt = "Logo Image" className="h-20"/>
            </nav>
            
            <div className="flex gap-5 mb-5">
                <SubnavTab href="/dashboard/recommended">Recommended</SubnavTab>
                <SubnavTab href="/dashboard/applied">Applied</SubnavTab>
                <SubnavTab href="/dashboard/responded">Responded</SubnavTab>
            </div>
            {children}
        </main>
    )
}