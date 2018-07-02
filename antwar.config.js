const path = require("path");

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
    about: page("about", {
      title: "About",
      description: "What React Finland is about?",
    }),
    imprint: page("imprint", {
      title: "Imprint",
      description: "How to reach GraphQL Finland organizers?",
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: "What is the privacy policy of GraphQL Finland?",
    }),
    "for-attendees": page("for-attendees", {
      title: "For Attendees",
      description: "What should I know as a React Finland attendee?",
    }),
    "for-sponsors": page("for-sponsors", {
      title: "For Sponsors",
      description: "What should I know as a React Finland sponsor?",
    }),
    speakers: page("speakers", {
      title: "Speakers",
      speakers: "Who is going to speak?",
    }),
    workshops: page("workshops", {
      title: "Workshops",
      description: "Which workshops will be held?",
    }),
    schedule: page("schedule", {
      title: "Schedule",
      description: "Schedule of the conference",
    }),
  },
};

function page(name, meta = {}) {
  const ret = () => {
    const pageComponent = require(`./pages/${name}`).default;

    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
