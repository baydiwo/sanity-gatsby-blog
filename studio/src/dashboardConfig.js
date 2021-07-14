export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ee84f846370bfacce79713",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f1miujbp",
                  apiId: "a8af30a5-cb55-4e63-8f3c-875bba125468",
                },
                {
                  buildHookId: "60ee84f8e2a346018dafff5e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yh4rgcim",
                  apiId: "6c3bc94c-3d36-4877-8c81-f666b7bd2135",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/baydiwo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yh4rgcim.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
