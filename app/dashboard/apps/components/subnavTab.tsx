import Link from "next/link";

export default function SubnavTab({ children, name }: { children: React.ReactNode, name: string }) {
    return (
        <Link href={`/dashboard/apps/${name}`} className="py-2 px-6 font-semibold bg-blue-100 rounded-t-lg">{children}</Link>
    )
}