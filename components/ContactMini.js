import React from "react";
import PropTypes from "prop-types";
import ConnectedImage from "./ConnectedImage";

const ContactMiniContent = ({ image, name }) => [
  <ConnectedImage
    key="image"
    alt="about"
    className="contact-mini-logo photo"
    src={image.url}
    width={100}
  />,
  <figcaption key="name" className="contact-mini-name">
    {name}
  </figcaption>,
];
ContactMiniContent.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
};

const ContactMini = ({ name, about, social, image }) => (
  <figure className="contact-mini">
    {resolveSocialLink(social) ? (
      <a href={resolveSocialLink(social)} title={about}>
        <ContactMiniContent about={about} image={image} name={name} />
      </a>
    ) : (
      <ContactMiniContent about={about} image={image} name={name} />
    )}
  </figure>
);
ContactMini.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  social: PropTypes.object,
  image: PropTypes.object,
};

function resolveSocialLink(social) {
  return social.homepage || social.twitter;
}

export default ContactMini;
