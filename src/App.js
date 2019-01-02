import React, { Fragment } from "react";

import IndexStyle from "../src/styles/index";

import BooksApp from "./pages/Main/index";

const App = () => (
  <Fragment>
    <IndexStyle />
    <BooksApp />
  </Fragment>
);

export default App;
