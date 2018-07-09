import React from "react";
import { Markdown } from "components";
import { AnchorHeader } from "components";

import "../styles/session.scss";

const Session = ({ speaker, sessions, titles = { speaker: null } }) => {
  const social = speaker.social;

  return (
    <>
      {speaker && (
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
          {social && (
            <div className="session--speaker-social">
              {social.homepage && (
                <a href={social.homepage}>
                  <i className="icon-home" />
                </a>
              )}

              {social.github && (
                <a href={social.github}>
                  <i className="icon-github-circled" />
                </a>
              )}

              {social.twitter && (
                <a href={social.twitter}>
                  <i className="icon-twitter" />
                </a>
              )}

              {social.linkedin && (
                <a href={social.linkedin}>
                  <i className="icon-linkedin-squared" />
                </a>
              )}
            </div>
          )}
        </section>
      )}

      {sessions && (
        <section className="session--topics">
          {sessions.map((session, i) => (
            <div className="session--topic" key={`session-${i}`}>
              <div className="session--topic-background" />
              {session.header && (
                <h3 className="session--topic-header">{session.header}</h3>
              )}
              {session.title && (
                <AnchorHeader
                  level={4}
                  anchor={session.title}
                  className="session--topic-title"
                >
                  {session.title}
                </AnchorHeader>
              )}
              <div className="session--topic-description">
                <Markdown source={session.description} />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Session;
