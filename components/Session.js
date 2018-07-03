import React from "react";
import { Markdown } from "components";
import { AnchorHeader } from "components";

import "../styles/session.scss";

const Session = ({
  speaker,
  session,
  titles = { speaker: null, session: null },
}) => {
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
        <div className="session--speaker-about">{speaker.aboutShort}</div>
      </section>

      <section className="session--topic">
        <div className="session--topic-background" />
        {titles.session && (
          <h3 className="session--topic-header">{titles.session}</h3>
        )}
        <AnchorHeader
          level={4}
          anchor={session.title}
          className="session--topic-title"
        >
          {session.title}
        </AnchorHeader>
        <div className="session--topic-description">
          <Markdown source={session.description} />
        </div>
      </section>
    </>
  );
};

export default Session;
