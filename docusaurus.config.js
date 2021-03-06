// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Loop Language",
    tagline: "A Modern Type-safe Programming Language.",
    url: "https://looplang.org/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "looplanguage", // Usually your GitHub org/user name.
    projectName: "looplanguage.github.io", // Usually your repo name.
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/looplanguage/looplanguage.github.io/edit/main",
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: "https://github.com/looplanguage/looplanguage.github.io/edit/main/blog",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: "eec66f8bd25976fb30cae8cd3918edc0",
          indexName: "looplang",

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: see doc section below
          appId: "BH4D9OD16A",

          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: false,
          switchConfig: {
            darkIcon: '🌙',
            darkIconStyle: {
              marginLeft: '2px',
            },
            // Unicode icons such as '\u2600' will work
            // Unicode with 5 chars require brackets: '\u{1F602}'
            lightIcon: '\u{1F31E}',
            lightIconStyle: {
              marginLeft: '1px',
            },
          },
        },
        navbar: {
          hideOnScroll: true, 
          title: " ",
          logo: {
            alt: "Loop Logo",
            src: "img/loopLogoBlack.png",
            srcDark: "img/loopLogoWhite.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
            {
              to: "https://downloads.looplang.org",
              position: "left",
              label: "Downloads",
            },
            {
              to: "/blog",
              label: "Updates",
              position: "left",
            },
            {
              label: "GitLab",
              href: "https://gitlab.com/looplanguage",
              position: "right",
            },
            {
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Introduction",
                  to: "/docs/intro",
                },
                {
                  label: "Installation",
                  to: "/docs/usage/installation",
                },
                {
                  label: "First App",
                  to: "/docs/usage/first-app",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.gg/T3tqQBTyJA",
                },
                {
                  label: "Jira",
                  href: "https://looplang.atlassian.net/jira/software/c/projects/LOOP/issues",
                },
                {
                  label: "Contributor Guidelines",
                  to: "/contributor_guidelines",
                },
                {
                  label: "Development Guidelines",
                  href: "https://gitlab.com/looplanguage/loop/-/wikis/Loop-Language-Development-Guidelines"
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Updates",
                  to: "/blog",
                },
                {
                  label: "GitLab",
                  href: "https://gitlab.com/looplanguage",
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Code of Conduct",
                  to: "/conduct",
                },
                {
                  label: "Privacy",
                  to: "/privacy",
                },
                {
                  label: "This site is powered by Netlify",
                  href: "https://www.netlify.com/",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Loop Language`,
        },
        prism: {
          theme: undefined,
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: "G-B8LRCBXDX3",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
  }
);
