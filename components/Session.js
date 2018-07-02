import React from "react";

import "../styles/session.scss";

const Session = ({
  speaker,
  type = "talks",
  titles = { speaker: "Featuring", session: "Topic" },
}) => {
  const about = speaker.about ? speaker.about.split(".")[0] + "." : "";
  const session = speaker[type].length
    ? speaker[type][0]
    : { title: "", description: "" };

  return (
    <>
      <section className="session--speaker">
        <div className="session--speaker-background" />
        <h3 className="session--speaker-header">{titles.speaker}</h3>
        <img
          className="session--speaker-image"
          src={speaker.image.url}
          alt={speaker.name}
        />
        <div className="session--speaker-name">{speaker.name}</div>
        <div className="session--speaker-about">{about}</div>
      </section>

      <section className="session--topic">
        <div className="session--topic-background" />
        <h3 className="session--topic-header">{titles.session}</h3>
        <div className="session--topic-title">{session.title}</div>
        <div className="session--topic-description">{session.description}</div>
      </section>
    </>
  );
};

export default Session;
