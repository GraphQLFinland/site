import React from "react";
import {
  AnchorHeader,
  Contacts,
  Markdown,
  Organizer,
  connect,
} from "components";

const About = ({ conference: { organizers = [] } = {} } = {}) => (
  <>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown
          source={`
We want to provide a new plaftform for discussions and talks about GraphQL, as well as a place where people could learn more about it. We also want to provide the best of Finnish hospitality to our conference visitors.

We hope to create something unique by combining our northern traditions with speakers and visitors from all around the world.
`}
        />
      </div>
      <aside className="intro--aside" />
    </section>

    <AnchorHeader level={2}>The Organizers</AnchorHeader>
    <div className="grid--5col">
      <p>
        GraphQL Finland is organized as a community effort. All of us are
        developers and this shows in the conference.
      </p>
    </div>
    <div className="grid--full organizers">
      <Contacts items={organizers} render={Organizer} />
    </div>
    <div className="grid--5col">
      <p>
        Our goal is to connect our valued speakers with our local community in
        the most fruitful way we can and provide Finnish hospitality to our
        conference visitors.
      </p>

      <p>
        We hope to create something unique by combining our northern traditions
        with speakers and visitors from all around the world.
      </p>
    </div>
  </>
);

export default connect(`
  query PageQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      organizers {
        name
        image {
          url
        }
        about
      }
    }
  }
`)(About);
