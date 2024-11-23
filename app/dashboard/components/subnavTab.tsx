import Link from "next/link";

export default function SubnavTab({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link href={href} className="py-2 px-6 font-semibold bg-blue-100 rounded-t-lg">{children}</Link>
    )
}