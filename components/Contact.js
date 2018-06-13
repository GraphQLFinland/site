import React from "react";
import ReactCountryFlag from "react-country-flag";
import PropTypes from "prop-types";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";
import ConnectedImage from "./ConnectedImage";

const Contact = ({
  name,
  image,
  social,
  location,
  about,
  headerLevel = 2,
  children,
}) => (
  <section className="contact" key={name}>
    <div className="contact--meta">
      <AnchorHeader
        level={headerLevel}
        anchor={name}
        className="contact--header"
      >
        <ConnectedImage
          className="contact--photo photo"
          alt={about}
          width={100}
          height={100}
          src={image.url}
        />

        <span className="contact--name">{name}</span>

        <span className="contact--country">
          <ReactCountryFlag code={location.country.code} svg />
        </span>
      </AnchorHeader>

      <div className="social">
        {social.homepage && <a href={social.homepage}>{social.homepage}</a>}

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
    </div>

    <div className="content">
      {about ? <Markdown className="about" source={about} /> : "No bio yet."}
    </div>

    {children}
  </section>
);
Contact.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  social: PropTypes.object,
  location: PropTypes.object,
  about: PropTypes.string,
  headerLevel: PropTypes.number,
  children: PropTypes.node,
};

export default Contact;
