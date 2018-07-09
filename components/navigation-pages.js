import React from "react";

export default [
  {
    props: {
      className: "nav--social",
    },
    links: [
      {
        // https://www.youtube.com/c/GraphQLFinlan
        title: (
          <a href="https://www.youtube.com/channel/UCReJkc0nO9jhVTNgm5psuFA">
            <i className="icon-youtube-play" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://medium.com/graphql-finland">
            <i className="icon-medium" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://twitter.com/GraphQLFinland">
            <i className="icon-twitter" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://github.com/GraphQLFinland">
            <i className="icon-github-circled" />
          </a>
        ),
      },
    ],
  },
  {
    props: {
      className: "nav--main",
    },
    links: [
      {
        title: "Intro",
        url: "/",
      },
      {
        title: "Schedule",
        url: "/schedule/",
      },
      {
        title: "Speakers",
        url: "/speakers/",
      },
      {
        title: "Workshops",
        url: "/workshops/",
      },
    ],
  },
  {
    props: {
      className: "nav--secondary",
    },
    links: [
      {
        title: "For Attendees",
        url: "/for-attendees/",
      },
      {
        title: "For Sponsors",
        url: "/for-sponsors/",
      },
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "Tickets",
        url: "/#tickets",
      },
    ],
  },
];
