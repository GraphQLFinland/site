import React from "react";
import PropTypes from "prop-types";
import { Markdown, connect } from "components";

const Imprint = ({ page: { main } }) => (
  <section className="intro intro_imprint">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);
Imprint.propTypes = {
  page: PropTypes.object,
};

export default connect(`
  query PageQuery($conferenceId: ID!) {
    page(conferenceId: $conferenceId, id: "imprint") {
      main
    }
  }
`)(Imprint);
