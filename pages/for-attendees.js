import React from "react";
import { AnchorHeader, Markdown } from "components";

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
    <div className="grid--5col">
      <Markdown
        source={`
## How to Get to the Venue?

There's a direct train from the airport to Helsinki center. HSL operates the local public transport system. You can find a city bike system as well. From city center, take a tram or metro to Hakaniemi.

To get to the center for airport, you can use train, Finnair buses or taxi. It seems that nowadays there might be some fake taxis, so use reliable taxi services like TaksiHelsinki, Lahitaksi, Kovanen or FixuTaxi. Note that taxis are very expensive in Helsinki.

## Where to Stay?

* [Hotel F6](https://www.hotelf6.fi/) - Roughly 160€ per night.
* [Omena Hotels](https://www.omenahotels.com/en/) - Roughly 60-80€ per night. Minimal service. Two separate hotels.
* [Kongressikoti Hotel](http://kongressikoti.fi/) - Roughly 60€ per night.
* [Hostel Diana Park](http://www.dianapark.fi/) - Roughly 30€ per night.

## How to Follow the Conference Program?

1. Use the site [schedule](/schedule/).
2. Use the mobile applications (Android, iPhone).
3. [Subscribe to the conference calendar](https://api.react-finland.fi/calendar/graphql-finland). You can import it to your Google Calendar for example.

## What Should I Know About Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](https://medium.com/react-finland/brief-guide-to-finnish-7f43f37d5017) in order to surprise the locals.
* We use euro as our currency.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has about 5.5 million residents. That's about 1.6 times the population of Berlin spread around a big area. Whole Germany has roughly the same land area.`}
      />
    </div>
  </>
);

export default ForAttendees;
