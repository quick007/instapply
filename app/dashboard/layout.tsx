import Link from "next/link";
import SubnavTab from "./apps/components/subnavTab";
import CurrPage from "./components/currPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <nav className=" bg-blue-50 h-16 mb-5 flex justify-between items-center px-4">
        <div className="flex items-center grow">
          <Link href="/">
            <img src="/file.png" alt="Logo Image" className="h-12" />
            <h1 className="text-gray-800 font-bold">InstApply</h1>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 mx-2"
          >
            <path
              fillRule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <CurrPage />
        </div>
        <div className="flex items-center">

        <Link href="/dashboard/profile">
          <div className="rounded-full p-2 bg-blue-200 ml-44">
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
        </Link></div>
      </nav>
      {children}
    </main>
  );
}
