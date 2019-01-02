import { createGlobalStyle } from "styled-components";

const IndexStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  html,
  body,
  .root {
    height: 100%;
  }

  body,
  .app {
    background: white;
  }

  .list-books-title {
    padding: 10px 0;
    background: #2e7c31;
    text-align: center;
    h1 {
      font-weight: 400;
      margin: 0;
      color: white;
    }
  }

  .list-books-content {
    padding: 0 0 80px;
    flex: 1;
  }

  button:active {
    border: red;
    outline: none;
  }

  .books-grid {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .books-grid li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export default IndexStyle;
