import React from "react";
import { AnchorHeader, Markdown } from "components";

const ForSpeakers = () => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown
          source={`Attendance info with a focus on you, our dear speaker.`}
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
        source={`The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. On 18th, several meeting rooms would be used for the workshops. On 19th, the big congress hall will be the main conference location. For speakers, there is gonna be a top floor speaker room on 19th.`}
      />
    </div>
    <div className="grid--5col">
      <Markdown
        source={`
## Hotel

We booked you all at [Scandic Paasi](https://www.scandichotels.com/hotels/finland/helsinki/scandic-paasi?cmpid=ppc_BH2nd&gclid=Cj0KCQjw6fvdBRCbARIsABGZ-vR4KRNmrnasn45hHa-ekzL1kAtPWXVo_gfnkVIq2Ah-dsZT7IuFyk4aArTkEALw_wcB). You are booked for your whole stay (for the time discussed with each of your individually). There is breakfast. In case you were one of the sponsors, who agreed to pay for their expenses, you'd need to pay for the hotel at checkout, otherwise we've paid for the hotel already and you don't need to do anything.

## How to Get to the Venue?

TODO

## Workshops

The workshops will also be held at Paasitorni, but in smaller rooms. There will be lunch and two breaks with some pastries during the workshop day, so make sure to have breaks at that time. Breaks will be held at the restaurant an it will be an additional opportunity to mingle between the workshop participant. The schedule for the workshops is:

* 08:00-09:00 registration
* 11:30-12:30 Lunch break at the restaurant
* 14:00-14:20 - First break at the restaurant
* 15:40-16:00 - Second break at the restaurant
* 17:30- workshops end.

Workshop hosts, I'll send you list of your attendees so you can email them with more info eg about required pre-installation steps.

## Talks

I'll remind you, but please do sound/equipment check on a break before your talk. Lightning talks are 15 mins, normal talks are 30 mins. We have pretty tight schedule, so it's totally okay to have shorter talk, but please try to not have them longer. There won't be Q&A during the talks nor a panel at the end. However, we want to do a Q&A thingie that will happen after the talk. So on the next break after talk, I wonder if you could come to an informal Q&A session at the entrance foyer (I'll remind you about that too).

# Speakers dinner

TODO

Speaker dinner will be held at 18th at Paasi restaurant at XXX. There will be taxis to take you to the venue from the hotel.

## What Should I Know About Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](https://medium.com/react-finland/brief-guide-to-finnish-7f43f37d5017) in order to surprise the locals.
* We use euro as our currency.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has about 5.5 million residents. That's about 1.6 times the population of Berlin spread around a big area. Whole Germany has roughly the same land area.`}
      />
    </div>
  </>
);

export default ForSpeakers;
