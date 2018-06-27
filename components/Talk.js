import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown } from "components";

const TYPES = {
  KEYNOTE: "🗝",
  LIGHTNING_TALK: "⚡️",
  PRESENTATION: "🎙",
  WORKSHOP: "👩‍💻",
};

const Talk = ({ title, description, urls, type, headerLevel = 2 }) => (
  <div className="content-block">
    <AnchorHeader level={headerLevel}>
      <span title={type}>{TYPES[type]}</span> {title || "To be announced."}
      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
      {urls &&
        urls.slides && (
          <a href={urls.slides} style={{ fontSize: "small" }} target="_blank">
            Slides (PDF)
          </a>
        )}
      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
      {urls &&
        urls.web && (
          <a href={urls.web} style={{ fontSize: "small" }} target="_blank">
            Slides (web)
          </a>
        )}
    </AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);
Talk.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.shape({
    slides: PropTypes.string,
  }),
  type: PropTypes.oneOf(Object.keys(TYPES)),
  headerLevel: PropTypes.number,
};

export default Talk;
