import Link from "next/link";
import ApplicationColumn from "./applicationColumn";


export default function ApplicationManager({
  pos,
  lan,
  link,
  isHeading,
}: {
  pos: string;
  lan: string[];
  link: string;
  isHeading: boolean;
}) {
  return (
    <div
      className={`flex justify-start  border-none rounded-lg ${
        isHeading ? "px-2 py-1" : "px-2 py-4"
      } gap-10`}
    >
      <ApplicationColumn
        className={`grow ${
          isHeading ? "text-primary-verydark" : "text-primary-darkish"
        }`}
      >
        {pos}
      </ApplicationColumn>
      <ApplicationColumn className="w-[30rem]">
        {isHeading
          ? <p className="text-primary-verydark">Languages</p>
          : (
            <div className="gap-2 flex items-center flex-wrap">
              {lan.map((v) => (
                <div
                  className={`rounded-full text-sm px-2 text-primary-darkish bg-primary-darkish/15 !font-`}
                  key={v}
                >
                  {v}
                </div>
              ))}
            </div>
          )}
      </ApplicationColumn>
      {isHeading
        ? <ApplicationColumn className="w-32 justify-center items-center">Apply</ApplicationColumn>
        : (
          <ApplicationColumn className="w-32 flex justify-start items-center">
            <Link
              href={link}
              className="text-white font-semibold mr-auto py-0.5 px-4 gap-4 border-none bg-primary-darkish rounded-full"
            >
              Apply
            </Link>
          </ApplicationColumn>
        )}
        {isHeading
            ? <><ApplicationColumn className="w-24 text-left">Save</ApplicationColumn>
                <ApplicationColumn className="w-24 text-center">Applied</ApplicationColumn></>
            : (<div className="flex items-center">
            <button className="w-32 flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
            <button className="w-20 flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>)
        }
    </div>
  );
}
