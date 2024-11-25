import Link from "next/link";
import getStatsData from "./components/getData";

count = getStatsData();

export default function DashboardInfo(
    { children, href }: { children: React.ReactNode; href: string },
) {
    return (
        <div>
            <Link
                href={href}
                className="text-primary-verydark grow p-10 flex flex-col items-center justify-center gap-2 bg-primary-medium border-none rounded-3xl">
                {children}
                <h1 className="text-5xl"></h1>
            </Link>
        </div>
    );
}
