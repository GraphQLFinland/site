import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import {
  AnchorHeader,
  AnchorProvider,
  Contacts,
  Footer,
  Header,
  Meta,
  Sponsor,
  Subscribe,
  connect,
} from "../components";

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/style.scss";

const siteName = "GraphQL Finland";

const SiteBody = (
  {
    children,
    location: { pathname },
    page: {
      file: { title, description, keywords },
    },
    conference: {
      partners = [],
      goldSponsors = [],
      silverSponsors = [],
      bronzeSponsors = [],
    } = {},
    contact: speaker,
  },
  { router }
) => (
  <HelmetProvider
    context={
      router && router.staticContext && router.staticContext.helmetContext
    }
  >
    <AnchorProvider>
      <Meta
        siteName={siteName}
        title={title}
        description={description}
        keywords={keywords}
      />
      <main>
        <Header pathname={pathname} title={title} speaker={speaker} />
        <div className="main-container container">
          <section className="grid grid_6col">{children}</section>
          {pathname !== "/sponsors/" && (
            <section className="grid grid_6col">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥇 Gold Sponsors
              </AnchorHeader>
              <div className="sponsors sponsors_gold grid--full">
                <section className="sponsors--list">
                  <Contacts items={goldSponsors} render={Sponsor} />
                </section>
              </div>

              <AnchorHeader className="sponsors--heading" level={2}>
                🥈 Silver Sponsors
              </AnchorHeader>
              <div className="sponsors sponsors_silver grid--full">
                <section className="sponsors--list">
                  <Contacts items={silverSponsors} render={Sponsor} />
                </section>
              </div>

              <AnchorHeader level={2}>🥉 Bronze Sponsors</AnchorHeader>
              <div className="sponsors sponsors_bronze grid--full">
                <section className="sponsors--list">
                  <Contacts items={bronzeSponsors} render={Sponsor} />
                </section>
              </div>

              <AnchorHeader level={2}>Partners</AnchorHeader>
              <div className="sponsors sponsors_partners grid--full">
                <section className="sponsors--list">
                  <Contacts items={partners} render={Sponsor} />
                </section>
              </div>
            </section>
          )}
        </div>
        <Subscribe list="https://react-finland.us16.list-manage.com/subscribe/post?u=a940d62db3f360204bf40b1c4&amp;id=7cb74ccf50" />
        <Footer />
      </main>
    </AnchorProvider>
  </HelmetProvider>
);
SiteBody.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  page: PropTypes.object,
  conference: PropTypes.shape({
    partners: PropTypes.array,
    goldSponsors: PropTypes.array,
    silverSponsors: PropTypes.array,
    bronzeSponsors: PropTypes.array,
  }),
  contact: PropTypes.object,
};

const sponsorFragment = `
  fragment SponsorFragment on Contact {
    name
    social {
      homepage
    }
    about
    image {
      url
    }
  }
`;

export default hot(module)(
  connect(`
    query RootQuery($conferenceId: ID!) {
      conference(id: $conferenceId) {
        partners {
          ...SponsorFragment
        }
        goldSponsors {
          ...SponsorFragment
        }
        silverSponsors {
          ...SponsorFragment
        }
        bronzeSponsors {
          ...SponsorFragment
        }
      }

      contact(contactName: "Ellie Day", conferenceId: $conferenceId) {
        name
        about
        aboutShort
        image {
          url
        }
        talks {
          title
          description
        }
      }
    }

    ${sponsorFragment}
  `)(SiteBody)
);
