import { redirect } from "next/navigation";
import ApplicationManager from "../components/applicationManager";
import { getAppData } from "../components/getData";

export default async function Page() {
  const data = await getAppData("rec");

  if (data === null) {
    return redirect("/");
  }

  if (data === undefined) {
    return "we couldn't find any jobs for you :(";
  }

  return (
    <>
      {data.map((data) => (
        <ApplicationManager key={data.id} pos={data.job_title || ""} lan={data.coding_lang!} link={data.link} isHeading={false} id={data.id.toString()}/>
      ))}
    </>
  );
}
