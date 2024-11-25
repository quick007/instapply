"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

export const updateProfile = async (
	formData: FormData,
): Promise<{ success: boolean; error?: string }> => {
	const data = {
		firstName: formData.get("first_name")?.toString() || "",
		lastName: formData.get("last_name")?.toString() || "",
		email: formData.get("email")?.toString() || "",
		school: formData.get("school")?.toString() || "",
		languages: formData.getAll("languages") || "",
		major: formData.get("major")?.toString() || "",
		degree: formData.get("degree")?.toString() || "",
		gradYear: formData.get("grad_year")?.toString() || "",
		// resume: formData.get("resume") as File | null,
		// coverLetter: formData.get("cover_letter") as File | null,
		github: formData.get("github")?.toString() || "",
		linkedIn: formData.get("linked_in")?.toString() || "",
		website: formData.get("website")?.toString() || "",
		phone: formData.get("phone")?.toString() || "",
		gender: formData.get("gender")?.toString() || "",
		hispanicLatino: formData.get("hispanic_latino")?.toString() || "",
		veteranStatus: formData.get("veteran")?.toString() || "",
		disabilityStatus: formData.get("disability")?.toString() || "",
	};

	const formSchema = z.object({
	//  	first_name: z
	//  	.string()
	// 	.min(1, { message: "First name is required." })
	// 	.max(50, { message: "First name must be 50 characters or fewer." }),
	//  	last_name: z
	// 	.string()
	// 		.min(1, { message: "Last name is required." })
	// 		.max(50, { message: "Last name must be 50 characters or fewer." }),
	// 	email: z
	// 		.string()
	// 		.email({ message: "Invalid email address." })
		// school: z
		// 	.string()
		// 	.max(100, { message: "School name must be 100 characters or fewer." })
		// 	.optional()
		// 	.nullable(),
		// major: z
		// 	.enum([
		// 		"",
		// 		"Computer Science",
		// 		"Computer Engineering",
		// 		"Electrical Engineering",
		// 		"Cybersecurity",
		// 	], {
		// 		errorMap: () => ({ message: "Invalid major selected." }),
		// 	})
		// .optional(),
		// grad_year: z
		// 	.enum(["", "2025", "2026", "2027", "2028"], {
		// 		errorMap: () => ({ message: "Invalid graduation year selected." }),
		// 	})
		// 	.optional(),
		// // resume: z
		// // 	.instanceof(File)
		// // 	.optional(),
		// // cover_letter: z
		// // 	.instanceof(File)
		// // 	.optional(),
		// // github: z
		// // 	.string()
		// // 	.url({ message: "Invalid GitHub URL." })
		// // 	.optional()
		// // 	.nullable(),
		// // linked_in: z
		// // 	.string()
		// // 	.url({ message: "Invalid LinkedIn URL." })
		// // 	.optional()
		// // 	.nullable(),
		// // website: z
		// // 	.string()
		// // 	.url({ message: "Invalid website URL." })
		// // 	.optional()
		// // 	.nullable(),
		// phone: z
		// 	.string()
		// 	.regex(/^\+?[0-9]{10,15}$/, {
		// 		message: "Invalid phone number. Use a valid international format.",
		// 	})
		// 	.optional()
		// 	.nullable(),
	// 	gender: z
	// 		.enum(["", "Male", "Female", "Decline to Self Identify"], {
	// 			errorMap: () => ({ message: "Invalid gender selection." }),
	// 		})
	// 		.optional(),
	// 	hispanic_latino: z
	// 		.enum(["", "Yes", "No", "Decline to Self Identify"], {
	// 			errorMap: () => ({
	// 				message: "Invalid response for Hispanic/Latino question.",
	// 			}),
	// 		})
	// 		.optional(),
	// 	veteran: z
	// 		.enum([
	// 			"",
	// 			"I am not a protected veteran",
	// 			"I identify as one or more of the classifications of a protected veteran",
	// 			"I don't wish to answer",
	// 		], {
	// 			errorMap: () => ({ message: "Invalid veteran status selection." }),
	// 		})
	// 		.optional(),
	// 	disability: z
	// 		.enum([
	// 			"",
	// 			"Yes, I have a disability, or have had one in the past",
	// 			"No, I do not have a disability and have not had one in the past",
	// 			"I do not want to answer",
	// 		], {
	// 			errorMap: () => ({ message: "Invalid disability status selection." }),
	// 		})
	// 		.optional(),
	});

	const { success, error: zError } = formSchema.safeParse(data);
  console.log(success);
  console.log(zError?.errors);
	if (!success) {
		return {
			success: false,
			error: zError.issues && zError.flatten().formErrors[0],
		};
	}

	const supabase = await createClient();
	const { data: { user }} = await supabase.auth.getUser();

	const { error } = await supabase.from("profiles").update({
		first_name: data.firstName,
		last_name: data.lastName,
		email: data.email,
		school: data.school,
		languages: data.languages,
		major: data.major,
		degree: data.degree,
		grad_year: data.gradYear,
		github: data.github,
		linked_in: data.linkedIn,
		website: data.website,
		phone: data.phone,
		gender: data.gender,
		hpa: data.hispanicLatino,
		veteran: data.veteranStatus,
		disability: data.disabilityStatus,
		made_profile: true
	}).eq("id", user!.id);

	if (error) {
		return {
			success: false,
			error: error.message,
		};
	}

	return {
		success: true,
	};
};
