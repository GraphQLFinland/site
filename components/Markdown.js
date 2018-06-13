/* eslint-disable react/display-name, react/prop-types */
import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import AnchorHeader from "./AnchorHeader";
import ConnectedSchedule from "./ConnectedSchedule";
import ConnectedImage from "./ConnectedImage";

const Tip = ({ text }) => (
  <blockquote className="tip">
    <i className="icon-attention-circled" />
    {text.slice(2)}
  </blockquote>
);
Tip.propTypes = {
  text: PropTypes.string,
};

const Warning = ({ text }) => (
  <blockquote className="warning">
    <i className="icon-attention" />
    {text.slice(2)}
  </blockquote>
);
Warning.propTypes = {
  text: PropTypes.string,
};

const renderers = {
  heading: ({ level, children }) => (
    <AnchorHeader level={level}>{children}</AnchorHeader>
  ),
  // TODO: Rewrite image handling
  image: ({ alt, src }) => {
    const srcParts = alt ? alt.split("|") : [];
    alt = srcParts[0] || "";
    const width = srcParts[1] || "";
    const height = srcParts[2] || "";
    const className = srcParts[3] || "";

    let remoteSrc;
    if (src.startsWith("@react-finland/")) {
      remoteSrc = src.split("@react-finland/content-2018/images/")[1];
    } else if (src.startsWith("@@content/")) {
      remoteSrc = src.split("@@content/")[1];
    }

    if (remoteSrc) {
      return (
        <ConnectedImage
          alt={alt}
          width={width}
          height={height}
          className={className}
          src={remoteSrc}
        />
      );
    }

    src = src.split("assets/img/")[1];

    return (
      <img
        alt={alt}
        width={width}
        height={height}
        className={className}
        src={require(`assets/img/${src}`)}
      />
    );
  },
  paragraph: ({ children }) => {
    const text = children[0];

    // Example: T>
    if (text.startsWith && text.startsWith("T> ")) {
      return <Tip text={text} />;
    }

    // Example: W>
    if (text.startsWith && text.startsWith("W> ")) {
      return <Warning text={text} />;
    }

    // Example: {schedule:@react-finland/content-2018/schedules/25-04-2018}
    if (/\{schedule:[a-zA-Z@/\-0-9]*\}/.test(text)) {
      const importPath = text.slice(0, -1).split(":")[1];
      let scheduleName;
      if (importPath.startsWith("@react-finland/content-2018/src/schedules/")) {
        const [day, month, year] = importPath
          .split("@react-finland/content-2018/src/schedules/")[1]
          .split("-");
        scheduleName = `${year}-${month}-${day}`;
      } else {
        scheduleName = importPath;
      }

      return <ConnectedSchedule key={scheduleName} day={scheduleName} />;
    }

    return <p>{children}</p>;
  },
};

const Markdown = ({ source, ...props }) => (
  <ReactMarkdown source={source} renderers={renderers} {...props} />
);
Markdown.propTypes = {
  source: PropTypes.string,
  props: PropTypes.object,
};

export default Markdown;
