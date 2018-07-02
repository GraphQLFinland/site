import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, connect } from "components";

import "../styles/workshops.scss";

const Workshops = ({ conference: { workshops = [] } = {} }) => (
  <Contacts items={workshops} render={Workshop} />
);
Workshops.propTypes = {
  conference: PropTypes.object,
};

export default connect(`
  query PageQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      workshops {
        speakers {
          name
          about
          image {
            url
          }
        }
        title
        description
        location {
          name
          address
          city
        }
        tickets {
          name
          link
        }
      }
    }
  }
`)(Workshops);
