import React from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Markdown, VenueGallery } from "components";

const ForAttendees = () => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown
          source={`There are several things you must know before coming to GraphQL Finland. Read on to learn more.`}
        />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <Markdown
        source={`The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. On 18th, several meeting rooms would be used for the workshops. On 19th, the big congress hall will be the main conference location.`}
      />
    </div>
    {/* <div className="grid--full">
      <Interactive id="components/VenueGallery.js" component={VenueGallery} />
    </div>
    <AnchorHeader level={3}>The Venue Location</AnchorHeader>
    <div className="grid--full">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1TtRyfUF_tBBpKPf4MolkhdaN_3HHcG_9"
        width="100%"
        height="480"
        frameBorder="0"
      />
      <ul>
        <li>
          Blue star - Valkoinen Sali, the main venue and first workshop
          location. Aleksanterinkatu 16
        </li>
        <li>
          Green heart - Elisa Appelsiini, second workshop location. Kaarlenkatu
          11
        </li>
        <li>Red train - Main railway station</li>
        <li>Yellow swimmer - Allas Sea Pool</li>
        <li>Maroon drink - Sea Life Helsinki (afterparty). Tivolikuja 10</li>
      </ul>
    </div> */}
    <div className="grid--5col">
      <Markdown
        source={`## Where to Stay?

* [Hotel F6](https://www.hotelf6.fi/) - Roughly 160€ per night.
* [Omena Hotels](https://www.omenahotels.com/en/) - Roughly 60-80€ per night. Minimal service. Two separate hotels.
* [Kongressikoti Hotel](http://kongressikoti.fi/) - Roughly 60€ per night.
* [Hostel Diana Park](http://www.dianapark.fi/) - Roughly 30€ per night.

## How to Get to the Venue?

There's a direct train from the airport to Helsinki center. HSL operates the local public transport system. You can find a city bike system as well. From city center, take a tram or metro to Hakaniemi. 

## What to Take with You?

* A swimming suit.
* A towel.

## How to Follow the Conference Program?

1. Use the site [schedule](/schedule/).
2. Use the mobile applications (Android, iPhone).
3. [Subscribe to the conference calendar](https://api.react-finland.fi/calendar-2018.ics). You can import it to your Google Calendar for example.

## What Should I Know About Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](https://medium.com/react-finland/brief-guide-to-finnish-7f43f37d5017) in order to surprise the locals.
* We use euro as our currency.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has about 5.5 million residents. That's about 1.6 times the population of Berlin spread around a big area. Whole Germany has roughly the same land area.
* Some Finns don't like if you tell them Finland is a part of Scandinavia. Technically a small part in the north is but some consider Finland as a culturally separate entity. The more inclusive term to use might be *fennoscandia* (Finland and the rest).
  `}
      />
    </div>
  </>
);

export default ForAttendees;
