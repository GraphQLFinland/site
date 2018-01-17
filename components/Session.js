import React from "react";
import AnchorHeader from "./AnchorHeader";
import Contacts from "./Contacts";
import Markdown from "./Markdown";

const Session = ({ speakers, title, description }) => (
  <div className="content-block">
    <AnchorHeader level={2}>{title || "To be announced."}</AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}

    <Contacts
      className="speakers"
      items={speakers}
      renderProps={{ headerLevel: 3 }}
    />
  </div>
);

export default Session;
