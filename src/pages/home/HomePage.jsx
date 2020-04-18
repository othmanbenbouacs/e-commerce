import React from "react";
import "./home-page.styles.scss";
import Directory from "../../components/directory/Directory";
export const Homepage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
