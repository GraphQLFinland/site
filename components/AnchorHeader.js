import React from "react";
import PropTypes from "prop-types";

const AnchorHeader = ({ level, anchor, children, className }, { getId }) => {
  let id = getId && getId(anchor, children);

  return React.createElement(
    `h${level}`,
    { className: `heading ${className || ""}` },
    [
      <a className="heading--anchor" href={`#${id}`} id={id} key="anchor" />,
      <span className="text" key="anchor-text">
        {children}
      </span>,
      <a className="heading--anchor-select" href={`#${id}`} key="anchor-select">
        #
      </a>,
    ]
  );
};
AnchorHeader.contextTypes = {
  getId: PropTypes.func,
};
AnchorHeader.propTypes = {
  level: PropTypes.number,
  anchor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AnchorHeader;
