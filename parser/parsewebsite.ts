// Function to fetch and parse a webpage
export async function fetchAndParseHTML(url: string) {
  try {
    // Follow redirects and fetch the final destination
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const html = await response.text();

    return html;
  } catch (error) {
    console.error("Error fetching or parsing HTML:", error);
  }
}