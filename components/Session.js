import React from "react";
import { Markdown } from "components";

import "../styles/session.scss";

const Session = ({
  speaker,
  session,
  titles = { speaker: null, session: null },
}) => {
  const about = speaker.about ? speaker.about.split(".")[0] + "." : "";

  return (
    <>
      <section className="session--speaker">
        <div className="session--speaker-background" />
        {titles.speaker && (
          <h3 className="session--speaker-header">{titles.speaker}</h3>
        )}
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
        {titles.session && (
          <h3 className="session--topic-header">{titles.session}</h3>
        )}
        <h4 className="session--topic-title">{session.title}</h4>
        <div className="session--topic-description">
          <Markdown source={session.description} />
        </div>
      </section>
    </>
  );
};

export default Session;
