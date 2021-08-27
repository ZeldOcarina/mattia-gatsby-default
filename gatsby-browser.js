const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const Layout = require("./src/layout/Layout").default;
const { ContextProvider } = require("./src/context/AppContext");

exports.wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>;
};

exports.wrapPageElement = (props) => {
  return (
    <>
      <GlobalStyles />
      <Layout location={props.element.props.location}>{props.element}</Layout>
    </>
  );
};
