import { Metadata } from "next";
//why cant this find it 
import LoginButton from "./dashboard/components/loginButton";
<script src="https://unpkg.com/split-type"></script>;
<link rel="icon" href="/favicon.ico" />

export const metadata: Metadata = {};

export default function Home() {
  return (
    <div>
      <header>
      </header>
      <main className="bg-gradient-to-t from-[#68b4a4] to-white">
        <div className="w-screen h-screen flex justify-center items-center flex-col">
          <h1 className="text-[#20283d] font-bold text-7xl">
            InstApply
          </h1>
          <h2 className="text-[#20283d] font-bold text-xl mt-5 mb-10">
            Job Application Made Easy.
          </h2>
          <LoginButton />
        </div>
      </main>
    </div>
  );
}
