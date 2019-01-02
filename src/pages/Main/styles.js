import { createGlobalStyle } from "styled-components";
import addIcon from "../../icons/add.svg";

const Styles = createGlobalStyle`
.open-search {
  position: fixed;
  right: 25px;
  bottom: 25px;
}
.open-search a {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2e7d32;
  background-image: url(${addIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 0;
}

.open-search {
  position: fixed;
  right: 25px;
  bottom: 25px;
}

.open-search button:hover {
  background-color: rgb(0, 102, 0);
}
`;

export default Styles;
