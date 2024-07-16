const publicPath = process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : "";

export default {
  basePath: process.env.BASE_PATH ?? "",
  title: "OPG Event Store",
  tagline: "Documentation source for cross-service events",
  organizationName: "OPG",
  projectName: "Event Store",
  editUrl: "https://github.com/ministryofjustice/opg-event-store/edit/main",
  trailingSlash: true,
  logo: {
    alt: "EventCatalog Logo",
    src: "/logo.svg",
  },
  docs: {
    sidebar: {
      showPageHeadings: false,
      domains: { visible: false },
      teams: { visible: false },
    },
  },
};
