import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function LoginButton() {
  const login = async () => {
    "use server";

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        scopes: "email",
        redirectTo: (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000") + "/auth/callback"
      },
    });

    if (data.url) {
      redirect(data.url ?? "");
    }

    if (error) {
        console.log(error)
    }
  };

  

  return (
    <div>
      <button
        onClick={login}
        className="rounded-md bg-primary-light text-primary-verydark w-52 h-10 font-bold animate-appear"
      >
        Login
      </button>
    </div>
  );
}
