"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function CurrPage() {
  const pathname = usePathname();
  const [name, setName] = useState("Dashboard");

  useMemo(() => {
    if (pathname.includes("apps")) {
      setName("Applications");
    } else if (pathname.includes("profile")) {
      setName("Profile");
    } else {
      setName("Dashboard");
    }
  }, [pathname]);

  return <h2 className="text-gray-700 font-semibold">{name}</h2>;
}
