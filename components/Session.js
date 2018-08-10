import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Markdown } from "components";
import { AnchorHeader } from "components";

import "../styles/session.scss";

const Session = ({ contact, sessions, titles = { contact: null } }) => {
  const social = contact.social;

  return (
    <>
      {contact && (
        <section className="session--speaker">
          <div className="session--speaker-background" />
          {titles.contact && (
            <h3 className="session--speaker-header">{titles.contact}</h3>
          )}
          <img
            className="session--speaker-image"
            src={contact.image.url}
            alt={contact.name}
          />
          <div className="session--speaker-info">
            <AnchorHeader
              level={4}
              anchor={contact.name}
              className="session--speaker-name"
            >
              {contact.country && (
                <span className="session--speaker-country">
                  <ReactCountryFlag
                    code={contact.country.code}
                    styleProps={{ verticalAlign: "top" }}
                    svg
                  />
                </span>
              )}
              {contact.name}
            </AnchorHeader>
            <div className="session--speaker-about">{contact.aboutShort}</div>
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
          </div>
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
