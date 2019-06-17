import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";
import navigationPages from "./navigation-pages";
/*import Countdown from "./Countdown";
import Interactive from "antwar-interactive";*/

const Header = ({
  pathname,
  title,
  //speaker = { image: { url: "" }, talks: [] },
}) => {
  const isHomePage = pathname === "/";
  /*const session = speaker.talks.length
    ? speaker.talks[0]
    : { title: "", description: "" };*/

  return isHomePage ? (
    <header className={isHomePage ? "header header_index" : "header"}>
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={126}
              height={126}
              alt="GraphQL Finland Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">GraphQL </span>
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </Link>

        <h2 className="header--tagline">
          Learn More about GraphQL, Explore Finland.
        </h2>
      </div>
      <div className="header--container container grid grid_6col">
        <section className="header--dates">
          <time dateTime="2020-10-18" className="header--date">
            2020?
          </time>
          <address className="header--location">Helsinki, Finland</address>
        </section>

        {/*<Session
          contact={speaker}
          sessions={[{ header: "Topic", ...session }]}
          titles={{ contact: "Featuring" }}
        />*/}
        {/*<Interactive
          id="components/Countdown.js"
          component={Countdown}
          toDate="2018-04-24"
          containerProps={{ className: "countdown--container" }}
        />
        <section className="header--buy">
          <Link to="/#tickets" className="buy-button">
            Buy tickets
          </Link>
        </section>*/}
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="GraphQL Finland Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">React </span>
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </Link>
        <h2 className="header--pageTitle">{title}</h2>
      </div>
    </header>
  );
};
Header.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
  speaker: PropTypes.object,
};

export default Header;
