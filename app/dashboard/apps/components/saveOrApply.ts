"use server";

import { createClient } from "@/utils/supabase/server";

const getData = async (jobID: string) => {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user || userError) {
    throw Error("Smth bad happened");
  }

  return { supabase, id: user.id };
};

// true: upsert and saved is true
// false: delete row
export const savePosting = async (save: boolean, jobID: string) => {
  const { supabase, id } = awgetData();

  if (save) {
    const { error } = supabase.from("applied").upsert({
      job_id: jobID,
      saved: true,
      user_id: id,
    });
    if (error) {
      throw Error("smth went wrong")
    }
  } else {
    const { error } = supabase.from("applied").delete().eq("job_id", jobID).eq("user_id", id)

    if (error) {
      throw Error("whoopsie")
    }
  }
};

// true: upsert and saved is false
// false: delete row
export const appliedPosting = async (applied: true, jobID: string) => {
  const { supabase, id } = getData();

  if (save) {
    const { error } = supabase.from("applied").upsert({
      job_id: jobID,
      saved: false,
      user_id: id,
    });
    if (error) {
      throw Error("smth went wrong")
    }
  } else {
    const { error } = supabase.from("applied").delete().eq("job_id", jobID).eq("user_id", id)

    if (error) {
      throw Error("whoopsie")
    }
  }
};
