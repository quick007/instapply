import Link from "next/link";

export default function DashboardInfo(
    { children, href, count }: { children: React.ReactNode; href: string; count: number },
) {
    return (
        <div>
            <Link
                href={href}
                className="text-primary-verydark grow p-10 flex flex-col items-center justify-center gap-2 bg-primary-medium border-none rounded-3xl">
                {children}
                <h1 className="text-5xl">{count}</h1>
                
            </Link>
        </div>
    );
}
