import React from "react";
import PropTypes from "prop-types";
import { Session } from "components";

const Speaker = ({ talks, workshops, ...contact }) => (
  <div className="sessions grid grid_6col">
    <Session
      contact={contact}
      titles={{ contact: "Speaker" }}
      sessions={[{ header: "About", description: contact.about }]
        .concat(talks.map(talk => ({ header: "Talk", ...talk })))
        .concat(workshops.map(talk => ({ header: "Workshop", ...talk })))}
    />
  </div>
);

Speaker.propTypes = {
  talks: PropTypes.array,
  workshops: PropTypes.array,
  contact: PropTypes.object,
};

export default Speaker;
