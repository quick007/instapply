"use server"

import { createClient } from "@/utils/supabase/server";

export const updateProfile = async (formData: FormData): Promise<{success: boolean, error?: string}> => {
	const data = {
    firstName: formData.get("first_name")?.toString() || "",
    lastName: formData.get("last_name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    school: formData.get("school")?.toString() || "",
    major: formData.get("major")?.toString() || "",
    gradYear: formData.get("gradYear")?.toString() || "",
    resume: formData.get("resume") as File | null,
    coverLetter: formData.get("cover_letter") as File | null,
    github: formData.get("github")?.toString() || "",
    linkedIn: formData.get("linkedIn")?.toString() || "",
    website: formData.get("website")?.toString() || "",
    phone: formData.get("phone")?.toString() || "",
    gender: formData.get("gender")?.toString() || "",
    hispanicLatino: formData.get("hispanic_latino")?.toString() || "",
    veteranStatus: formData.get("veteran_status")?.toString() || "",
    disabilityStatus: formData.get("disability_status")?.toString() || "",
  };

	const supabase = await createClient()
	const { data: { user }, error: userError } = await supabase.auth.getUser()

	const { error } = await supabase.from("profiles").update({

	}).eq("id", user!.id)

	console.log(data)
}