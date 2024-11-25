import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardInfo from "./components/dashboardInfo";
import { getStatsData } from "./apps/components/getData";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  const stats = await getStatsData()

  if (error || !user) {
    return redirect("/");
  }

  const { data, error: fetchError } = await supabase.from("profiles").select(
    "id, made_profile, first_name",
  ).eq("id", user.id).single();

  if (fetchError || !data) {
    return redirect("/");
  }

  if (!data.made_profile) {
    return (
      <div className="flex flex-col items-center justify-center mt-44 bg-gradient-to-t from-primary-darkish to-primary-light">
        <h1 className="font-semibold text-7xl flex mb-10">Create your profile</h1>
        <div className="flex items-center justify-center">
          <img src="/businessMan.svg" className="h-72" />
          <Link href="/dashboard/profile">
            <div className="p-10 shadow-lg flex flex-col items-center rounded-full max-w-xl bg-primary-light animate-bounce">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>

            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center grow bg-gradient-to-t from-primary-darkish to-primary-light">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-4xl font-semibold text-primary-verydark">
          Hello, {data.first_name}!
        </h1>
        <h2 className="text-primary-verydark mb-10">Let{"'"}s continue with your applications!</h2>
        <div className="flex justify-center gap-4 text-xl">
          <DashboardInfo href="/dashboard/apps/recommended" count={stats!.rec}>Recommended</DashboardInfo>
          <DashboardInfo href="/dashboard/apps/saved" count={stats!.sav}>Saved</DashboardInfo>
          <DashboardInfo href="/dashboard/apps/applied" count={stats!.app}>Applied</DashboardInfo>
        </div>
      </div>
    </div>
  );
}
