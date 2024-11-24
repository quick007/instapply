import { redirect } from "next/navigation";
import ApplicationManager from "../components/applicationManager";
import { getAppData } from "../components/getData";

export default async function Page() {
  const data = await getAppData("app");

  if (data === null) {
    return redirect("/");
  }

  if (data === undefined) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="bg-primary-verydark text-primary-light p-5 border-none rounded-full mt-24">
          Once you apply for jobs you found in the recommended tab they'll show up here!
        </h1>
      </div>
    );
  }

  return (
    <>
      {data.map((data) => (
        <ApplicationManager
          key={data.id}
          pos={data.job_title || ""}
          lan={data.coding_lang!}
          link={data.link}
          isHeading={false}
        />
      ))}
    </>
  );
}
