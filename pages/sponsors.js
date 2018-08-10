import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Contacts, Session, connect } from "components";

const Sponsor = ({ title, ...contact }) => (
  <Session contact={contact} titles={{ contact: title }} />
);

const SponsorsCollection = ({ type, items, title }) =>
  items.length ? (
    <div className="sponsors-contacts">
      <AnchorHeader level={2}>{type}</AnchorHeader>
      <Contacts items={items} render={Sponsor} renderProps={{ title }} />
    </div>
  ) : null;

const Sponsors = ({
  conference: {
    partners = [],
    goldSponsors = [],
    silverSponsors = [],
    bronzeSponsors = [],
  } = {},
}) => (
  <>
    <SponsorsCollection
      type="🥇 Gold Sponsors"
      items={goldSponsors}
      title="Sponsor"
    />
    <SponsorsCollection
      type="🥈 Silver Sponsors"
      items={silverSponsors}
      title="Sponsor"
    />
    <SponsorsCollection
      type="🥉 Bronze Sponsors"
      items={bronzeSponsors}
      title="Sponsor"
    />
    <SponsorsCollection type="Partners" items={partners} title="Partner" />
  </>
);
Sponsors.propTypes = {
  conference: PropTypes.shape({
    partners: PropTypes.array,
    goldSponsors: PropTypes.array,
    silverSponsors: PropTypes.array,
    bronzeSponsors: PropTypes.array,
  }),
};

const sponsorFragment = `
  fragment SponsorFragment on Contact {
    name
    country {
      code
    }
    social {
      homepage
      github
      twitter
      linkedin
    }
    aboutShort
    about
    image {
      url
    }
    }
  `;

export default connect(`
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
  }

  ${sponsorFragment}
    `)(Sponsors);
