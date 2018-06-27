import React from "react";
import PropTypes from "prop-types";

const Organizer = ({ name, image, about, social }) => (
  <figure className="organizer" key={name}>
    <img
      alt={about}
      className="organizer--photo"
      width={100}
      height={100}
      src={image.url}
    />

    <figcaption className="organizer--name">
      {social.homepage ? <a href={social.homepage}>{name}</a> : name}
    </figcaption>
    <div className="social">
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
  </figure>
);
Organizer.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  about: PropTypes.string,
  social: PropTypes.object,
};

export default Organizer;
