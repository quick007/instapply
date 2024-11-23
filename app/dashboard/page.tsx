import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardInfo from "./components/dashboardInfo";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return redirect("/");
  }

  const { data, error: fetchError } = await supabase.from("profiles").select(
    "id, made_profile",
  ).eq("id", user.id).single();

  if (fetchError || !data) {
    return redirect("/");
  }

  if (!data.made_profile && false) {
    return (
      <div className="flex items-center justify-center grow">
        <img src="/businessMan.svg" className="h-72" />
        <div className="p-10 shadow-md flex flex-col items-center rounded-lg max-w-xl">
          <h2>Create your profile</h2>
          <Link
            href="/dashboard/profile"
            className="rounded-md bg-gray-800 text-white font-medium px-8 py-2 shadow"
          >
            Let's go
          </Link>
        </div>
      </div>
    );
  }
  let name = "Noam";

  return (
    <div className="flex items-center justify-center grow">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold text-primary-verydark">
          Hello, {name}!
        </h1>
        <h2 className="text-primary-verydark">Let's continue with your applications!</h2>
        <div className="flex justify-evenly gap-4 text-xl">
          <DashboardInfo href="/dashboard/apps/recommended">Recommended</DashboardInfo>
          <DashboardInfo href="/dashboard/apps/applied">Applied</DashboardInfo>
        </div>
      </div>
    </div>
  );
}
