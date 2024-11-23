import { Database } from '@/database.types'
import { createBrowserClient } from '@supabase/ssr'
// import supabase
export function createClient() {
  return createBrowserClient<Database>(
<<<<<<< HEAD
    'https://ogxemeldsvetooampdxa.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGVtZWxkc3ZldG9vYW1wZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMDM4NDcsImV4cCI6MjA0Nzg3OTg0N30.Q5E4wvuFSXOQS1gm1ii7CH7qkFV3HAUU3IYDnEQsbZI',
=======
    "https://ogxemeldsvetooampdxa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGVtZWxkc3ZldG9vYW1wZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMDM4NDcsImV4cCI6MjA0Nzg3OTg0N30.Q5E4wvuFSXOQS1gm1ii7CH7qkFV3HAUU3IYDnEQsbZI",
>>>>>>> 798cdc7e276e161adc678f3c4e408f63f4151a80
  )
}