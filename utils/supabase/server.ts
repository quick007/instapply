import { Database } from "@/database.types";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
export async function createClient() {
  const cookieStore = await cookies();
<<<<<<< HEAD
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  return createServerClient<Database>(
    'https://ogxemeldsvetooampdxa.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGVtZWxkc3ZldG9vYW1wZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMDM4NDcsImV4cCI6MjA0Nzg3OTg0N30.Q5E4wvuFSXOQS1gm1ii7CH7qkFV3HAUU3IYDnEQsbZI',
=======

console.log("THING", process.env.NEXT_PUBLIC_SUPABASE_URL)
  return createServerClient<Database>(
    "https://ogxemeldsvetooampdxa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGVtZWxkc3ZldG9vYW1wZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMDM4NDcsImV4cCI6MjA0Nzg3OTg0N30.Q5E4wvuFSXOQS1gm1ii7CH7qkFV3HAUU3IYDnEQsbZI",
>>>>>>> 798cdc7e276e161adc678f3c4e408f63f4151a80
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}