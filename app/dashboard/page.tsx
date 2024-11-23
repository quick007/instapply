import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient()
  const {data: { user}, error} = await supabase.auth.getUser()

  if (error || !user) {
    return redirect("/")
  }

  const {data, error: fetchError} = await supabase.from("profiles").select("id, made_profile").eq("id", user.id).single()

  if (fetchError || !data) {
    return redirect("/")
  }

  if (!data.made_profile) {
    return (
      <div className="flex flex-col items-center justify-center grow">
        <div className="p-10 shadow-md flex flex-col items-center rounded-lg max-w-xl">
          <h2>Create your profile</h2>
          <img src="" />
          <Link href="/dashboard/profile" className="rounded-md bg-gray-800 text-white font-medium px-8 py-2 shadow">Let's go</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-between">

    </div>
  );
}

