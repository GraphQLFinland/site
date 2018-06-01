import React from "react";
import { Contacts, Speaker, connect } from "components";

const Speakers = ({ conference: { speakers = [] } = {} }) => (
  <div className="grid--5col" id="schedule">
    <Contacts className="speakers" items={speakers} render={Speaker} />
  </div>
);

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
        }
        image
        social {
          homepage
          github
          twitter
          linkedin
        }
        location {
          country {
            code
          }
        }
        about
        keywords
      }
    }
  }
`)(Speakers);
