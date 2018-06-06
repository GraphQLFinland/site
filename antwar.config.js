const path = require("path");
// const {
//   content: { pages },
// } = require("@react-finland/content-2018");

module.exports = {
  apiUrl: "https://api.react-finland.fi/graphql",
  // apiUrl: "http://localhost:3333/graphql",
  conferenceId: "graphql-finland-2018",
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {},
    },
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "404.html": page("404", {
      description: "Page was not found",
      title: "Page not found",
    }),
    "/": page("index", {
      title: "GraphQL Finland",
      description:
        "GraphQL Finland (18-19.10.2018, Helsinki) is a conference that comes with a workshop day and a day of talks.",
    }),
    // "2018": page("2018", {
    //   description: "GraphQL Finland 2018",
    //   title: "GraphQL Finland 2018",
    // }),
    // "for-attendees": page("for-attendees"),
    // "for-sponsors": page("for-sponsors"),
    // about: page("about"),
    imprint: page("imprint", {
      title: "Imprint",
      description: "How to reach GraphQL Finland organizers?",
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: "What is the privacy policy of GraphQL Finland?",
    }),
    // "2018/schedule": page("schedule"),
    // "2018/speakers": page("speakers"),
    // "2018/workshops": page("workshops"),
  },
};

function page(name, meta) {
  const ret = () => {
    const pageComponent = require(`./pages/${name}`).default;
    // const pageData = pages.find(({ id }) => id === name) || {};
    //
    // TODO - fix this
    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
