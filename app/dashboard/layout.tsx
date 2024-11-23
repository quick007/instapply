import Link from "next/link";
import SubnavTab from "./components/subnavTab";

export default function Layout(children: React.ReactNode) {
    return (
        <>
            <nav className="w-screen bg-red-100 h-20">
                NavBar
            </nav>
            <div>
                {/* <image href = "/public/file.png">logoImage</image> */}
            </div>
            <div className="flex gap-10">
                <SubnavTab href="/dashboard/recommended">Recommended</SubnavTab>
            </div>
        </>
    )
}