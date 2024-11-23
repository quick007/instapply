//why cant this find it something fix ple
//import Profile from "./dashboard/components/profile";
import { Metadata } from "next";

export const metadata: Metadata = {};
export default function homePage() {
  return (
    <div>
      <header>
      </header>
      <main className="bg-gradient-to-t from-[#68b4a4] to-white">
        <div className="w-screen h-screen flex items-center flex-col">
          <h1 className="text-[#20283d] font-bold text-7xl">
            Welcome!
          </h1>
          <h2 className="text-[#20283d] font-bold text-xl mt-5 mb-10">
            Internships await.
          </h2>
       
        </div>
      </main>
    </div>
  );
}
