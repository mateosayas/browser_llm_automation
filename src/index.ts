import * as Browser from "./browser";
import * as LLM from "./llm";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not found in environment variables");
  }

  const browser = await Browser.initBrowser();
  const page = await Browser.createPage(browser);

  const url = "https://www.google.com/";

  Browser.navigateToUrl(page, url);

  const pageContent = await Browser.getPageContent(page);

  const openai = LLM.createOpenAI(apiKey);

  // Pass the page markup to the LLM
  const selector = await LLM.sendMessage(openai, pageContent);

  console.log("Selector returned by LLM: ", selector);

  // click button with the selector returned by the LLM
  Browser.clickElement(page, selector);
}

main();
