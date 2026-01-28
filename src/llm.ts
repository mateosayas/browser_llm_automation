import OpenAI from "openai";

// Creates OpenAI client
export function createOpenAI(apiKey: string) {
  return new OpenAI({ apiKey });
}

// Send message to LLM
export async function sendMessage(
  openai: OpenAI,
  pageContent: string,
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an automated browser assistant. Your task is to analyze webpage markup and find the CSS selector for the sign-in button. You will only return one selector for this element.",
      },
      {
        role: "user",
        content: `Analyze the provided webpage content and identify the CSS selector for the primary "Sign In" or "Log In" element.
        
        Guidelines:
        - It is almost always an anchor link (<a>), NOT a button (<button>).
        - Look for 'href' attributes containing 'login', 'assembler', 'ServiceLogin', or 'accounts'.
        - Look for 'aria-label' attributes containing 'Sign in', 'Log in', 'Acceder', 'Iniciar sesión'.
        - If multiple candidates exist, prefer the one with "href" pointing to an authentication domain (e.g., accounts.google.com).
        - Return EXACTLY ONE CSS selector string that uniquely identifies this element.
        - Example valid output: "a[href*='ServiceLogin']", "a[aria-label*='Sign in']".
        `,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "element_selector_extraction",
        schema: {
          type: "object",
          properties: {
            selector: {
              type: "string",
              description: "A single CSS selector for the target element",
            },
          },
          required: ["selector"],
          additionalProperties: false,
        },
        strict: true,
      },
    },
  });

  const content = response.choices[0].message.content;
  if (!content) {
    throw new Error("No content received from LLM");
  }

  const result = JSON.parse(content);
  return result.selector;
}
