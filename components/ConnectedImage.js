import React from "react";
import PropTypes from "prop-types";
import connect from "./connect";

const ConnectedImage = ({ alt, width, height, className, image }) => (
  <img
    alt={alt}
    width={width}
    height={height}
    className={className}
    src={image && image.url}
  />
);

ConnectedImage.propTypes = {
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default connect(
  `
  query ImageQuery($conferenceId: ID!, $image: String!){
    image(conferenceId: $conferenceId, image: $image) {
      url
    }
  }
`,
  ({ src }) => ({
    image: src,
  })
)(ConnectedImage);
