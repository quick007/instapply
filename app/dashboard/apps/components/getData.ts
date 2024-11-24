import { createClient } from "@/utils/supabase/server";

export const getAppData = async (page: "rec" | "app" | "res") => {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    console.log(userError);
    return null;
  }

  const { data: userData, error: userDataError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  const { data, error } = await supabase
    .from("links")
    .select("*, applied(*)")
    .eq("parsed", true)
    .eq("applied.user_id", user.id);

  if (!data || error || !userData || userDataError) {
    console.log(error, userDataError);
    return null;
  }

	let r: typeof data = []

  if (page === "rec") {
    r = data.filter((v) => {
      if (
        v.applied.length === 0 &&
        userData.languages &&
        v.coding_lang &&
        userData.languages.some((langauge) => v.coding_lang?.includes(langauge))
      ) {
        return true;
      }
      return false;
    });
  }

	if (r.length === 0) {
		return undefined
	}

	return r
};
