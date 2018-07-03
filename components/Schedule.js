import React from "react";
import PropTypes from "prop-types";
import AnchorHeader from "./AnchorHeader";
import Markdown from "./Markdown";
import Keywords from "./Keywords";
import SessionSpeakers from "./SessionSpeakers";
import slugify from "../utils/slugify";

const TYPES = {
  KEYNOTE: "🗝",
  LIGHTNING_TALK: "⚡️",
  PRESENTATION: "🎙",
  WORKSHOP: "👩‍💻",
  COFFEE_BREAK: "☕",
  BREAKFAST: "🥐",
  LUNCH: "🍽️",
  ORGANIZATIONAL: "💤",
  PANEL: "🙋",
  PARTY: "🎉",
};

const Schedule = ({ intervals }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }, i) => [
      <dt className={`schedule--title ${getType(sessions)}`} key={`dt-${i}`}>
        {begin}–{end}
      </dt>,
      <dd className="schedule--definition" key={`dd-${i}`}>
        {sessions.map(({ title, type, description, speakers, keywords }, i) => (
          <div className="session" key={`session-${i}`}>
            {type === "WORKSHOP" ? (
              <WorkshopTitle
                key={i}
                title={title}
                type={type}
                speakers={speakers}
              />
            ) : (
              <AnchorTitle
                key={i}
                title={title}
                type={type}
                speakers={speakers}
              />
            )}
            {type !== "WORKSHOP" &&
              description && (
                <Markdown
                  key={`description-${i}`}
                  source={description}
                  escapeHtml={false}
                />
              )}
            {keywords && <Keywords key={`keywords-${i}`} items={keywords} />}
          </div>
        ))}
      </dd>,
    ])}
  </dl>
);
Schedule.propTypes = {
  intervals: PropTypes.object,
};

// TODO: If there are multiple sessions, how to resolve type? -> mixed?
function getType(sessions) {
  return sessions.length && sessions[0].type.toLowerCase();
}

const WorkshopTitle = ({ title, type, speakers }) => (
  <AnchorHeader level={3} anchor={title}>
    {TYPES[type] && <span title={type}>{TYPES[type]} </span>}
    <a href={`/workshops#${slugify(title)}`}>{title}</a>{" "}
    {title && speakers && "—"}{" "}
    {speakers && <SessionSpeakers key={`speaker-names`} speakers={speakers} />}
  </AnchorHeader>
);

const AnchorTitle = ({ title, type, speakers }) => (
  <AnchorHeader level={3} anchor={title}>
    {TYPES[type] && <span title={type}>{TYPES[type]} </span>}
    {title} {title && speakers && "—"}{" "}
    {speakers && <SessionSpeakers key={`speaker-names`} speakers={speakers} />}
  </AnchorHeader>
);

export default Schedule;
