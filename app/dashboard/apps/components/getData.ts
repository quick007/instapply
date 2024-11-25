import { createClient } from "@/utils/supabase/server";

export const getAppData = async (page: "rec" | "sav" | "app") => {
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

  let r: typeof data = [];

  if (page === "rec") {
    r = data.filter((v) => {
      if (
        v.applied.length === 0 &&
        userData.languages &&
        v.coding_lang
      ) {
        const knownLanguages = v.coding_lang.filter((lang) =>
          userData.languages?.includes(lang)
        );
        return knownLanguages.length > v.coding_lang.length / 2;
      }
      return false;
    });
  }

  if (page === "sav") {
    r = data.filter((v) => v.applied[0]?.saved);
  }

  if (page === "app") {
    r = data.filter((v) => v.applied[0] && !v.applied[0].saved);
  }

  if (r.length === 0) {
    return undefined;
  }

  return r;
};

export const getStatsData = async () => {
  const stats = { rec: 0, sav: 0, app: 0 };
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

  stats.rec = data.filter((v) => {
    if (
      v.applied.length === 0 &&
      userData.languages &&
      v.coding_lang
    ) {
      const knownLanguages = v.coding_lang.filter((lang) =>
        userData.languages?.includes(lang)
      );
      return knownLanguages.length > v.coding_lang.length / 2;
    }
    return false;
  }).length;

  stats.sav = data.filter((v) => v.applied[0]?.saved).length;

  stats.app = data.filter((v) => v.applied[0] && !v.applied[0].saved).length;

  return stats;
};
