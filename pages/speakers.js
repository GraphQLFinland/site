import React from "react";
import PropTypes from "prop-types";
import { Contacts, Speaker, connect } from "components";

const Speakers = ({ conference: { speakers = [] } = {} }) => (
  <Contacts items={speakers} render={Speaker} />
);
Speakers.propTypes = {
  conference: PropTypes.object,
};

export default connect(`
  query PageQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      speakers {
        name
        talks {
          title
          description
          type
          urls {
            slides
            web
          }
        }
        workshops {
          title
          type
          description
        }
        image {
          url
        }
        social {
          homepage
          github
          twitter
          linkedin
        }
        country {
          code
        }
        about
        keywords
      }
    }
  }
`)(Speakers);
