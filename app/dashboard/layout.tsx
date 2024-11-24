import Link from "next/link";
import SubnavTab from "./apps/components/subnavTab";
import CurrPage from "./components/currPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className=" bg-primary-light h-20 flex justify-between items-center px-4">
        <Link href="/dashboard/apps/recommended">
          <div className="flex items-center">
            <img src="/file.png" alt="Logo Image" className="h-20" />
            <h1 className="text-[#20283d] font-bold text-2xl">InstApply</h1>
          </div>
        </Link>

        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          <Link href="/dashboard/profile">
            <div className="rounded-full p-2 bg-blue-200 ml-5 mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </nav>
      {children}
    </main>
  );
}
