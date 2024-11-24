import { generateText } from 'ai';
import { createAzure } from '@ai-sdk/azure';
import "jsr:@std/dotenv/load";


const azure = createAzure({
  resourceName: 'joshy-m3tmgmls-eastus2', // Azure resource name
  apiKey: Deno.env.get("AZURE_AI_KEY"),
});

const { text } = await generateText({
  model: azure('gpt-4o-mini'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

console.log(text)
