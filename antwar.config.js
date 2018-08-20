const path = require("path");
const EVENT_NAME = "GraphQL Finland";

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
      title: EVENT_NAME,
      description: `${EVENT_NAME} (18-19.10.2018, Helsinki) is a conference that comes with a workshop day and a day of talks.`,
    }),
    about: page("organizers", {
      title: "Organizers",
      description: `Who is organizing ${EVENT_NAME}?`,
    }),
    imprint: page("imprint", {
      title: "Imprint",
      description: `How to reach ${EVENT_NAME} organizers?`,
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: `What is the privacy policy of ${EVENT_NAME}?`,
    }),
    "for-attendees": page("for-attendees", {
      title: "For Attendees",
      description: `What should I know as a ${EVENT_NAME} attendee`,
    }),
    "for-sponsors": page("for-sponsors", {
      title: "For Sponsors",
      description: `What should I know as a ${EVENT_NAME} sponsor?`,
    }),
    speakers: page("speakers", {
      title: "Speakers",
      speakers: `Who is going to speak at ${EVENT_NAME}?`,
    }),
    // sponsors: page("sponsors", {
    //   title: "Sponsors",
    //   speakers: `Who are sponsoring ${EVENT_NAME}?`,
    // }),
    workshops: page("workshops", {
      title: "Workshops",
      description: `Which workshops will be held at ${EVENT_NAME}?`,
    }),
    schedule: page("schedule", {
      title: "Schedule",
      description: `What is the schedule of ${EVENT_NAME}?`,
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
