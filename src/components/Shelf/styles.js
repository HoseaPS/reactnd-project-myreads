import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
.bookshelf {
  padding: 0 10px 20px;
}

@media (min-width: 600px) {
  .bookshelf {
    padding: 0 20px 40px;
  }
}

.bookshelf-title {
  border-bottom: 1px solid #dedede;
}

.bookshelf-books {
  text-align: center;
}
`;

export default Styles;
