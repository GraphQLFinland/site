import React from "react";
import PropTypes from "prop-types";
import AnchorHeader from "./AnchorHeader";
import Markdown from "./Markdown";
import Keywords from "./Keywords";
import SessionSpeakers from "./SessionSpeakers";

const TYPES = {
  KEYNOTE: "🗝",
  LIGHTNING_TALK: "⚡️",
  PRESENTATION: "🎙",
  WORKSHOP: "👩‍💻",
};

const Schedule = ({ intervals }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }, i) => [
      <dt key={`dt-${i}`}>
        {begin}–{end}
      </dt>,
      <dd key={`dd-${i}`}>
        {sessions.map(({ title, type, description, speakers, keywords }, i) => (
          <div className="session" key={`session-${i}`}>
            <AnchorHeader level={3} anchor={title} key={`title-${i}`}>
              {TYPES[type] && <span title={type}>{TYPES[type]} </span>}
              {title} {title && speakers && "—"}{" "}
              {speakers && (
                <SessionSpeakers
                  key={`speaker-names-${i}`}
                  speakers={speakers}
                />
              )}
            </AnchorHeader>
            {description && (
              <Markdown key={`description-${i}`} source={description} />
            )}
            {keywords && <Keywords key={`keywords-${i}`} items={keywords} />}
          </div>
        ))}
      </dd>,
    ])}
  </dl>
);
Schedule.propTypes = {
  items: PropTypes.object,
};

export default Schedule;
