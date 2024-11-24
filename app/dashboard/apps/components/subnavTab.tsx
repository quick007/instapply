"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubnavTab({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`/dashboard/apps/${name}`}
      className={`py-1.5 px-6 font-semibold rounded-t-lg ${pathname.includes(name) ? "bg-gray-800 text-white mt-3" : "bg-blue-50 text-gray-700 mt-5"}`}
    >
      {children}
    </Link>
  );
}
