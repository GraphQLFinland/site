import React from "react";
import PropTypes from "prop-types";
import ConnectedImage from "./ConnectedImage";
import { slugify } from "../utils";

const SessionSpeakers = ({ speakers = [] }) => (
  <span className="session--speakers">
    {speakers &&
      speakers.map(({ name, image, about }, i) => [
        speakers.length > 1 &&
          i === speakers.length - 1 && <span key={`and-${i}`}> and </span>,
        <a
          key={`name-${i}`}
          className="speaker-name"
          href={`/speakers/#${slugify(name)}`}
        >
          <ConnectedImage
            className="speaker-name--photo photo"
            alt={about}
            key={i}
            width={32}
            height={32}
            src={image.url}
          />
          {name}
        </a>,
      ])}
  </span>
);
SessionSpeakers.propTypes = {
  speakers: PropTypes.array,
};

export default SessionSpeakers;
