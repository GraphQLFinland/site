import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Session } from "components";

const Workshop = ({
  speakers,
  title,
  description,
  location,
  headerLevel = 2,
}) => (
  <div className="workshop grid grid_6col">
    <Session
      speaker={speakers[0]}
      session={{ title, description }}
      titles={{ speaker: "Speaker", session: "Workshop" }}
    />

    <div className="location">
      <AnchorHeader level={headerLevel + 1}>Location</AnchorHeader>

      <span>
        {location.name} - {location.address}, {location.city}
      </span>
    </div>
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
