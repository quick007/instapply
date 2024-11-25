import { createClient } from "@/utils/supabase/server";
import Form from "./form";
import { redirect } from "next/navigation";

export default async function Profile() {
	const supabase = await createClient()
	const { data: {user}, error: userError}  = await supabase.auth.getUser()

	if (!user || userError) {
		return redirect("/")
	}

	const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single()

	if (!data) {
		return redirect("/")
	}

  return (
    <div className="grow flex justify-center">
      <Form data={data} />
    </div>
  );
}
