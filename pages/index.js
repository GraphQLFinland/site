import React from "react";
import { AnchorHeader, Contacts, Contact, Markdown, connect } from "components";

const Index = ({ conference: { speakers = [] } = {} }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown
          source={`
GraphQL Finland is a community-organized GraphQL conference. The first of its kind in Finland, the event consists of a workshop day and a day of talks around the topic. GraphQL Finland is organized by the same team that brought you [React Finland](https://react-finland.fi).

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
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--5col speakers">
      <Contacts items={speakers} render={Contact} />
    </div>
    <div className="intro--main">More speakers will be announced soon!</div>
    {/* <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="intro--main">Coming soon!</div> */}
    <AnchorHeader level={2}>Venue - Paasitorni</AnchorHeader>
    <div className="intro--main">
      <img
        alt="Paasitorni"
        style={{ width: "100%" }}
        src={
          "https://www.paasitorni.fi/app/uploads/2017/12/IMG_2411-1-1000x667.jpg"
        }
      />
      <Markdown
        source={`The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. On 18th, several meeting rooms would be used for the workshops. On 19th, the big congress hall will be the main conference location.`}
      />
    </div>
    <div className="intro--pushdown" />
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
