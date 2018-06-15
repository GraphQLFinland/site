import React from "react";
import PropTypes from "prop-types";

const Subscribe = ({
  children = "Subscribe to get GraphQL Finland related news to your mail.",
  list = "", // Get this from mailchimp
}) => {
  return (
    <section className="subscribe">
      <div className="subscribe--wrapper">
        <h2 className="subscribe--header">{children}</h2>

        <form
          action={list}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="subscribe--form"
          target="_blank"
          noValidate
        >
          <input
            type="email"
            placeholder="john@domain.com"
            name="EMAIL"
            className="subscribe--input"
            id="mce-EMAIL"
            required
          />
          <div
            style={{
              display: "none",
              position: "absolute",
              left: "-5000px",
            }}
          >
            <input
              type="text"
              name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
              tabIndex="-1"
              value=""
            />
          </div>
          <button
            type="submit"
            className="subscribe--button"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
Subscribe.propTypes = {
  children: PropTypes.element,
  list: PropTypes.string.isRequired,
};

export default Subscribe;
