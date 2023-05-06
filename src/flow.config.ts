type Config = {
  links: {
    type: string;
    color: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

export const flowConfig: Config = {
  links: [
    {
      type: "Socials",
      color: "green-",
      links: [
        {
          name: "Discord",
          url: "https://discord.com/app",
        },
        {
          name: "Twitter",
          url: "https://twitter.com",
        },
        {
          name: "Instagram",
          url: "https://instagram.com",
        },
        {
          name: "Reddit",
          url: "https://reddit.com",
        },

        {
          name: "hn",
          url: "https://news.ycombinator.com",
        },
        {
          name: "Lobsters",
          url: "https://lobste.rs",
        },
      ],
    },
    {
      type: "Tools",
      color: "teal-",
      links: [
        {
          name: "GitHub",
          url: "https://github.com",
        },
        {
          name: "Vercel",
          url: "https://vercel.com",
        },
        {
          name: "ChatGPT",
          url: "https://chat.openai.com",
        },
        {
          name: "Gmail",
          url: "https://mail.google.com",
        },
        {
          name: "Perplexity",
          url: "https://perplexity.ai"
        },
        {
          name: "Notion",
          url: "https://notion.so"
        },
        {
          name: "Excalidraw",
          url: "https://excalidraw.com/",
        },
      ],
    },
    {
      type: "Leisure",
      color: "blue-",
      links: [
        {
          name: "YouTube",
          url: "https://youtube.com",
        },
        {
          name: "Zoro",
          url: "https://zoro.to",
        },
        {
          name: "Manga",
          url: "https://mangareader.to",
        },
        {
          name: "Twitch",
          url: "https://twitch.tv",
        },
      ],
    },
    {
      type: "Resources",
      color: "purple-",
      links: [
        {
          name: "Tailwind",
          url: "https://tailwindcss.com/docs/customizing-colors",
        },
        {
          name: "Icons",
          url: "https://icones.js.org/",
        },
        {
          name: "Fontshare",
          url: "https://fontshare.com/",
        },
        {
          name: "Repo",
          url: "https://repo.new",
        },
        {
          name: "Uno",
          url: "https://unocss.dev/play",
        },
        {
          name: "Typewolf",
          url: "https://typewolf.com",
        },
      ],
    },
    {
      type: "Others",
      color: "rose-",
      links: [
        {
          name: "Dev.to",
          url: "https://dev.to",
        },
        {
          name: "Monkeytype",
          url: "https://monkeytype.com",
        },
        {
          name: "LH:3000",
          url: "http://localhost:3000",
        },
        {
          name: "LH:5173",
          url: "http://localhost:5173",
        },
        {
          name: "LH:8000",
          url: "http://localhost:8000",
        },
        {
          name: "LH:8080",
          url: "http://localhost:8080",
        },
      ],
    },
  ],
};
