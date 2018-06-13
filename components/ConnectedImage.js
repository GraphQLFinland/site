import React from "react";
import PropTypes from "prop-types";

// TODO: Rename as Image
const ConnectedImage = ({ alt, width, height, className, src }) => (
  <img
    alt={alt}
    width={width}
    height={height}
    className={className}
    src={src}
  />
);

ConnectedImage.propTypes = {
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ConnectedImage;
