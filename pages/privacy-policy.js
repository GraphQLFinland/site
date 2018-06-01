import React from "react";
import PropTypes from "prop-types";
import { Markdown, connect } from "components";

const PrivacyPolicy = ({ page: { main } }) => (
  <section className="intro intro_privacy">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);
PrivacyPolicy.propTypes = {
  page: PropTypes.object,
};

export default connect(`
  query PageQuery($conferenceId: ID!) {
    page(conferenceId: $conferenceId, id: "privacy-policy") {
      main
    }
  }
`)(PrivacyPolicy);
