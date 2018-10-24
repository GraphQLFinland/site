import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const Index = ({ conference: { speakers = [] } = {} }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown
          source={`
GraphQL Finland is a community-organized GraphQL conference. The first of its kind in Finland, the event consists of a [workshop day](/workshops) and a day of talks around the topic. GraphQL Finland is organized by the same team that brought you [React Finland](https://react-finland.fi).

There are still few GraphQL conferences in the world. However, GraphQL already has an amazing, vibrant community. We wanted to provide a new platform for people to share their GraphQL experience and a new place for people to learn about GraphQL.

In this single track event you will learn more about GraphQL and surrounding topics while meeting some of the leading talents of the community. In addition to enjoying the event, this is your chance to explore Finland. It's still relatively warm in October, trust us.
        `}
        />
      </div>
      <aside className="intro--aside">
        <Markdown
          source={
            "We proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/)."
          }
        />
      </aside>
    </section>
    <AnchorHeader level={2}>Past Speakers</AnchorHeader>
    <div className="grid--5col speakers">
      <Contacts items={speakers} render={ContactMini} />
    </div>
  </>
);

export default connect(`
  query PageQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      speakers {
        name
        about
        country {
          code
        }
        social {
          homepage
          github
          twitter
          linkedin
        }
        image {
          url
        }
      }
    }
  }
`)(Index);
