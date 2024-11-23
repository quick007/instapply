import { Metadata } from "next";
import LoginButton from "./components/loginButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Suspense } from "react";
<script src="https://unpkg.com/split-type"></script>;
<link rel="icon" href="/favicon.ico" />;

export const metadata: Metadata = {
  title: "InstApply",
};

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="bg-gradient-to-t from-[#68b4a4] to-white">
        <div className="w-screen h-screen flex justify-center items-center flex-col">
          <h1 className="text-[#20283d] font-bold text-7xl">InstApply</h1>
          <h2 className="text-[#20283d] font-bold text-xl mt-5 mb-10">
            Job Application Made Easy.
          </h2>
          <Suspense fallback={"Loading..."}>
            <LoginOrDash />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

const LoginOrDash = async () => {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  if (!user) {
    return <LoginButton />;
  }

  return (
    <Link
      href="/dashboard/reccomended"
      className="rounded-md bg-primary-light text-primary-verydark w-52 h-10 font-bold animate-appear flex items-center justify-center"
    >
      Dashboard
    </Link>
  );
};
