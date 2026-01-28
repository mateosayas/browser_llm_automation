interface BrowserTool {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: string;
      required: string[];
      properties: Record<string, any>;
    };
  };
}

export const browserTools: BrowserTool[] = [
  {
    type: "function",
    function: {
      name: "navigate_to_url",
      description: "Navigate the browser to a specific URL",
      parameters: {
        type: "object",
        required: ["url"],
        properties: {
          url: {
            type: "string",
            description: "The URL to navigate to",
          },
        },
      },
    },
  },

  {
    type: "function",
    function: {
      name: "click_element",
      description: "Click an element using a CSS selector to locate it.",
      parameters: {
        type: "object",
        required: ["selector"],
        properties: {
          selector: {
            type: "string",
            description:
              "CSS selector of the element to click (e.g., 'button.submit')",
          },
        },
      },
    },
  },

  {
    type: "function",
    function: {
      name: "get_page_content",
      description: "Get the visible text of the current page",
      parameters: {
        type: "object",
        required: [],
        properties: {},
      },
    },
  },
];
