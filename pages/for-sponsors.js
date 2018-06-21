import React from "react";
import { Markdown, connect } from "components";

const page = {
  intro: `
GraphQL Finland is the largest GraphQL conference in the Nordics arranged 18-19 of October, 2018 in Helsinki. The conference begins with a workshop day and is followed by a conference day discussing various topics related to GraphQL.
`,
  main: `
## International Speakers

The speakers of the conference have varying backgrounds and our roster includes many of the leading names from the community. The single track format allows our visitors to get most out of the experience. In particular, we want to connect the speakers with the local community as well as possible, in addition to fostering the growing GraphQL community.

## Focused Audience

We expect the audience to contain plenty of international flavor. Our target is to reach between 150 and 200 attendees.

## National and International Visibility

The conference will have visibility both in national and international level and will reach the wide GraphQL community. It has been positioned as a non-profit, developers to developers kind of conference but we are willing to provide visibility to limited amount of companies in order to produce the highest quality conference we can.

## Your Spot to Shine

We are offering the perfect spot for companies to promote their knowledge and presence in the React ecosystem through sponsorships. In addition, there will be also side activities with speakers and organizers to connect and communicate with top level professionals.

## Packages

| | BRONZE | SILVER | GOLD
| - | - | - |
| Cost | 2.000 € | 5.000 € | 10.000 €
| Available | 4 | 3 | 2
| Conference tickets | 2 x &#9786; | 4 x &#9786; | 6 x &#9786;
| Visibility on social media and website | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Logo size on website and app | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Banner in conference | &#10003; | &#10003; | &#10003;
| Banner on stage | | | &#10003;
| Speaker area access | &#10003; | &#10003; | &#10003;
| Logo on slides between the talks | &#10003; | &#10003; | &#10003;
| Job announcements | | &#10003; | &#10003;
| Branded booth | | | &#10003;
| Item in the goodie bag | | | &#10003;
| Attendance for the speaker events (e.g. the speakers dinner) | | &#9786; | &#9786; &#9786;
| Special requests | | | &#10003;

## How to Sponsor?

If you are interested in any of our sponsorship packages, get in touch (info <at> graphql-finland.fi)!
  `,
};
//
// `
// // | Speaker visiting your office* | |  | &#10003;
//
// // ### Speaker visiting your office*
// //
// // Our Sponsors will get a speaker visiting your office to have a small tech session and mingle with your employees. This is possible only at Helsinki Region, since the speakers will be flying to Helsinki-Vantaa airport.
// `;

const ForSponsors = () => (
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

export default ForSponsors;
