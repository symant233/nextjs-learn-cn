import { useRouter } from "next/router";

const metaTags = (
  <>
    <meta
      name="description"
      content="基于 App Router 架构的免费学习教程，通过构建全栈 Web 应用程序，让您更好的了解 Next.js 主要功能"
    />
    <meta name="keywords" content="Next.js, Next.js 教程, 如何学习 Next.js, React Server Component, React Server Actions" />
    <meta property="og:title" content="Learn Next.js 中文教程" />
    <meta property="og:description" content="基于 App Router 架构的免费学习教程，通过构建全栈 Web 应用程序，让您更好的了解 Next.js 主要功能" />
    <meta property="og:image" content="/chapter0-dashboard.avif" />
  </>
);

const config = {
  head: metaTags,
  logo: <span>Learn Next.js 中文教程</span>,
  project: {
    link: "https://github.com/qufei1993/nextjs-learn-cn",
  },
  docsRepositoryBase:
    "https://github.com/qufei1993/nextjs-learn-cn/blob/main",
  search: {
    placeholder: "Search",
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: { content: null },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Learn Next.js 中文教程",
      };
    }

    return {
      titleTemplate: "%s - Learn Next.js 中文教程",
    };
  },
  gitTimestamp: null,
  footer: false,
};

export default config;
