import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, language }) => {
  return (
    <Helmet htmlAttributes={{ lang: language || "en" }}>
      <title>{title || ""}</title>
      <meta name="description" content={description || ""} />
    </Helmet>
  );
};

export default Seo;
