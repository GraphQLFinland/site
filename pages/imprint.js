import React from "react";
import { Markdown } from "components";

const Imprint = () => (
  <section className="intro intro_imprint">
    <div className="intro--main">
      <Markdown
        source={`
* React Finland ry
* Lauttasaarentie 16 A 17
* 00200 Helsinki
* info <at> react-finland.fi
`}
      />
    </div>
  </section>
);

export default Imprint;
