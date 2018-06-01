import React from "react";
import { Markdown, connect } from "components";

const ForSponsors = ({ page = {} }) => (
  <>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={page.main} />
    </div>
  </>
);

export default connect(`
  query PageQuery($conferenceId: ID!) {
    page(conferenceId: $conferenceId, id: "for-sponsors") {
      intro
      main
    }
  }
`)(ForSponsors);
