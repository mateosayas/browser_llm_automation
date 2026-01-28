# Browser LLM Automation

This project is an automated browser assistant that uses **Puppeteer** for browser control and **OpenAI's GPT-4o-mini** to intelligently interact with web pages. It analyzes the DOM to find elements (like "Sign In" buttons) based on semantic meaning rather than hardcoded selectors, making it adaptable to different websites and languages.

## Features

- **Automated Navigation**: Navigates to specified URLs using Puppeteer.
- **Intelligent Selector Extraction**: Uses an LLM to find CSS selectors for specific actions (e.g., "Login", "Sign Up") by analyzing the page content.
- **Action Execution**: Automatically clicks the identified elements.

### Future implementations

- **Usage of tools**: using tools to provide the LLM the ability to decide which tools to use and when.

## Prerequisites

- Node.js (v18 or higher recommended)
- an OpenAI API Key

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd browser_llm_automation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

To run the automation script:

```bash
npm run dev
```

This will:

1. Launch a browser instance.
2. Navigate to `https://www.google.com/` (default).
3. Analyze the page to find the "Sign In" button.
4. Click the button.

## Development

- **`src/index.ts`**: Entry point of the application.
- **`src/browser.ts`**: Puppeteer wrapper functions for navigation and interaction.
- **`src/llm.ts`**: OpenAI integration for analyzing HTML and extracting selectors.
# browser_llm_automation
