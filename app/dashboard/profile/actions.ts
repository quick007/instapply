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

	const formSchema = z.object({
		first_name: z
			.string()
			.min(1, { message: 'First name is required.' })
			.max(50, { message: 'First name must be 50 characters or fewer.' }),
		last_name: z
			.string()
			.min(1, { message: 'Last name is required.' })
			.max(50, { message: 'Last name must be 50 characters or fewer.' }),
		email: z
			.string()
			.email({ message: 'Invalid email address.' }),
		school: z
			.string()
			.max(100, { message: 'School name must be 100 characters or fewer.' })
			.optional()
			.nullable(),
		major: z
			.enum(['', 'Computer Science', 'Computer Engineering', 'Electrical Engineering', 'Cybersecurity'], {
				errorMap: () => ({ message: 'Invalid major selected.' }),
			})
			.optional(),
		grad_year: z
			.enum(['', '2025', '2026', '2027', '2028'], {
				errorMap: () => ({ message: 'Invalid graduation year selected.' }),
			})
			.optional(),
		resume: z
			.instanceof(File)
			.optional(),
		cover_letter: z
			.instanceof(File)
			.optional(),
		github: z
			.string()
			.url({ message: 'Invalid GitHub URL.' })
			.optional()
			.nullable(),
		linked_in: z
			.string()
			.url({ message: 'Invalid LinkedIn URL.' })
			.optional()
			.nullable(),
		website: z
			.string()
			.url({ message: 'Invalid website URL.' })
			.optional()
			.nullable(),
		phone: z
			.string()
			.regex(/^\+?[0-9]{10,15}$/, { message: 'Invalid phone number. Use a valid international format.' })
			.optional()
			.nullable(),
		gender: z
			.enum(['', 'Male', 'Female', 'Decline to Self Identify'], {
				errorMap: () => ({ message: 'Invalid gender selection.' }),
			})
			.optional(),
		hispanic_latino: z
			.enum(['', 'Yes', 'No', 'Decline to Self Identify'], {
				errorMap: () => ({ message: 'Invalid response for Hispanic/Latino question.' }),
			})
			.optional(),
		veteran: z
			.enum(['', 'I am not a protected veteran', 'I identify as one or more of the classifications of a protected veteran', 'I don\'t wish to answer'], {
				errorMap: () => ({ message: 'Invalid veteran status selection.' }),
			})
			.optional(),
		disability: z
			.enum(['', 'Yes, I have a disability, or have had one in the past', 'No, I do not have a disability and have not had one in the past', 'I do not want to answer'], {
				errorMap: () => ({ message: 'Invalid disability status selection.' }),
			})
			.optional(),
	});
	

	const supabase = await createClient()
	const { data: { user }, error: userError } = await supabase.auth.getUser()

	const { error } = await supabase.from("profiles").update({
first_name: data.firstName,
last_name: data.lastName,
email: data.email,
school: data.school,
major: data.major,
grad_year: data.grad_year,
resume: data.resume,
cover_letter: data.cover_letter,
github: data.github,
linked_in: data.linked_in


	}).eq("id", user!.id)

	console.log(data)
}