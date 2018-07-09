import React from "react";
import PropTypes from "prop-types";
import { Session } from "components";

const Workshop = ({ speakers, title, description }) => (
  <div className="sessions grid grid_6col">
    <Session
      speaker={speakers[0]}
      sessions={[{ title, description }]}
      titles={{ speaker: "Speaker", session: "Workshop" }}
    />
  </div>
);
Workshop.propTypes = {
  speakers: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  headerLevel: PropTypes.number,
  location: PropTypes.object,
};

export default Workshop;
