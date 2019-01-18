import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, connect } from "components";

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
        people {
          name
          about
          aboutShort
          image {
            url
          }
          social {
            homepage
            github
            twitter
            linkedin
          }
        }
        title
        description
        location {
          name
          address
          city
        }
      }
    }
  }
`)(Workshops);
