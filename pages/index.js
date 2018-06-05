import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const Index = ({ page = {}, conference: { speakers = [] } = {} }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={page.secondary} />
      </aside>
    </section>
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={speakers} render={ContactMini} />
    </div>
    <div className="grid--full">More speakers would be announced soon!</div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">Coming soon!</div>
  </>
);

export default connect(`
  query PageQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      speakers {
        name
        about
        social {
          homepage
          github
          twitter
          linkedin
        }
        image
      }
    }
    page(conferenceId: $conferenceId, id: "index") {
      intro
      secondary
    }
  }
`)(Index);
