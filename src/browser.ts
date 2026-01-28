import puppeteer, { Browser, Page } from "puppeteer";

// Initializes the browser
export async function initBrowser(): Promise<Browser> {
  console.log("Launching browser...");

  const browser = await puppeteer.launch({
    headless: false,
  });

  console.log("Browser ready");

  return browser;
}

// Creates a new page
export async function createPage(browser: Browser): Promise<Page> {
  return browser.newPage();
}

// Navigates to a URL
export async function navigateToUrl(page: Page, url: string) {
  console.log(`Navigating to URL: ${url}`);

  await page.goto(url, { waitUntil: "networkidle2", timeout: 10000 });
}

// Clicks an element
export async function clickElement(page: Page, selector: string) {
  await page.waitForSelector(selector, { timeout: 5000 });

  await page.click(selector);

  console.log(`Clicked element with selector: ${selector}`);
}

// Get content of the page
export async function getPageContent(page: Page): Promise<string> {
  return await page.content();
}
