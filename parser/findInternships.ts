import { Database } from "../database.types.ts";
import { createBrowserClient } from "npm:@supabase/ssr";

const links = await extractLinks("./list.txt");

if (!links) {
  console.log("An unknown error occured!");
} else {
  // import supabase
  function createClient() {
    return createBrowserClient<Database>(
      "https://ogxemeldsvetooampdxa.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGVtZWxkc3ZldG9vYW1wZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMDM4NDcsImV4cCI6MjA0Nzg3OTg0N30.Q5E4wvuFSXOQS1gm1ii7CH7qkFV3HAUU3IYDnEQsbZI"
    );
  }
  const supabase = createClient();
  console.log(links);

  const { error } = await supabase.from("links").insert(
    links.map((link) => ({
      link,
    }))
  );

  console.log(error);
}

async function extractLinks(filePath: string) {
  try {
    // Read the file
    const fileContent = await Deno.readTextFile(filePath);

    // Regular expression to match URLs
    const urlRegex = /https?:\/\/[^\s\)>"]+/g;

    // Find all links in the file
    const allLinks = fileContent.match(urlRegex) || [];

    // Filter out links from GitHub, Bit.ly, and Imgur
    const filteredLinks = allLinks.filter(
      (link) =>
        !link.includes("github.com") &&
        !link.includes("bit.ly") &&
        !link.includes("imgur.com")
    );

    // Get the first 200 links
    const first200Links = filteredLinks.slice(0, 200);

    return first200Links;
  } catch (error) {
    console.error("Error reading or processing the file:", error);
  }
}
