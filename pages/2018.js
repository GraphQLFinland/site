import React from "react";
import PropTypes from "prop-types";
import { Markdown } from "components";

const source = `
GraphQL Finland was a great success! [Read the summary of the event](https://medium.com/graphql-finland/summary-of-graphql-finland-2018-a769460ebfdd).

See also [2018 speakers](/2018/speakers/), [schedule](/2018/schedule/), and [workshops](/2018/workshops/).
`;

const PageFor2018 = () => (
  <section className="intro intro_about">
    <div className="intro--main">
      <Markdown source={source} />
    </div>
  </section>
);
PageFor2018.propTypes = {
  page: PropTypes.object,
};

export default PageFor2018;
