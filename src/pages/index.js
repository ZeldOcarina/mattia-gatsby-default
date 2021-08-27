import React, { useContext } from "react";

import AppContext from "../context/AppContext";
import Seo from "../components/Seo";

const IndexPage = () => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <main>
      <Seo title={""} description={""} language="en" />
      <h1>Hello World!</h1>
    </main>
  );
};

export default IndexPage;
