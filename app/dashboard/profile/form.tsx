"use client"

import { useState, useTransition } from "react";
import { updateProfile } from "./actions";
import { Database, Tables } from "@/database.types";

export default function Form({data}: {data: Database["public"]["Tables"]["profiles"]["Row"]}) {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState("")
	const [saved, setSaved] = useState(false)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		startTransition(() => {
			(async () => {
				setError("")
				const data = await updateProfile(formData);
				if (data.success) {
					setSaved(true)
					setTimeout(() => setSaved(false), 1000)
				} else {
					setError(data.error || "An unknown error occured")
				}
				
			})();
		});
	}

	return (
		<form className="flex flex-col [&>input]:mb-4 [&>select]:mb-4 [&>label]:mb-0.5 [&>label]:font-medium max-w-2xl w-full py-10" onSubmit={handleSubmit}>
				<h2 className="text-3xl font-bold mb-4">Basic Info</h2>
        <label htmlFor="first_name">First Name <span className="text-red-500">*</span></label>
        <input type="text" name="first_name" required defaultValue={data.first_name || ""} />

        <label htmlFor="last_name">Last Name <span className="text-red-500">*</span></label>
        <input type="text" name="last_name" required defaultValue={data.last_name || ""} />

        
        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
        <input type="text" name="email" required defaultValue={data.email || ""} />

        <label htmlFor="school">School</label>
        <input type="text" id="school" defaultValue={data.school || ""} />

        <label htmlFor="major">Major</label>
        <select name="major" id="major" defaultValue={data.major || ""}>
          <option value=""></option>
          <option value="Computer Science">Computer Science</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Cyber Security">Cybersecurity</option>
        </select>

        <label htmlFor="grad_year">Graduation Year</label>
        <select name="grad_year" id="grad_year" defaultValue={data.grad_year || ""}>
          <option value=""></option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
        </select>

        <br></br>
				<h2 className="text-3xl font-bold mb-4">Job-Specific Info</h2>
{/* 
        <label htmlFor="resume">Resume</label>
        <input type="file" id="resume" />

        <label htmlFor="cover_letter">Cover Letter</label>
        <input type="file" id="cover_letter" /> */}

        <label htmlFor="github">Github</label>
        <input type="text" id="github"  defaultValue={data.github || ""}/>

        <label htmlFor="linkedIn">LinkedIn</label>
        <input type="text" id="linked_in" defaultValue={data.linked_in || ""}/>

        <label htmlFor="website">Website</label>
        <input type="text" id="website" defaultValue={data.website || ""}/>

        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" defaultValue={data.phone || ""}/>
        
            <br></br>
				<h2 className="text-3xl font-bold mb-4">Voluntary Self-Id</h2>

				<label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" defaultValue={data.gender || ""}>
          <option value=""></option>
          <option value="gender">Male</option>
          <option value="gender">Female</option>
          <option value="gender">Decline to Self Identify</option>
        </select>

				<label htmlFor="hispanic_latino">Are you Hispanic/Latino?</label>
        <select name="hispanic_latino" id="hpa" defaultValue={data.hpa || ""}>
          <option value=""></option>
          <option value="hispanic_latino">Yes</option>
          <option value="hispanic_latino">No</option>
          <option value="hispanic_latino">Decline to Self Identify</option>
        </select>

				<label htmlFor="veteran">Veteran Status</label>
        <select name="veteran" id="veteran" defaultValue={data.veteran || ""}>
          <option value=""></option>
          <option value="veteran">I am not a protected veteran</option>
          <option value="veteran">I identify as one or more of the classifications of a protected veteran</option>
          <option value="veteran">I don't wish to answer</option>
        </select>

				<label htmlFor="disability">Disability</label>
        <select name="disability" id="disability" defaultValue={data.disability || ""}>
          <option value=""></option>
          <option value="disability">Yes, I have a disability, or have had one in the past</option>
          <option value="disability">No, I do not have a disability and have not had one in the past</option>
          <option value="disability">I do not want to answer</option>
        </select>

				<button type="submit" disabled={isPending} className="rounded-md bg-gray-800 disabled:brightness-75 disabled:cursor-not-allowed text-white font-medium px-8 py-2 shadow mt-8">{saved ? "Saved!" : "Save"}</button>
				{error && <p className="text-red-500">{error}</p>}

      </form>
	)
}