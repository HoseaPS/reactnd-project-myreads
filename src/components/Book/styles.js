import { createGlobalStyle } from "styled-components";
import arrowDropDownIcon from "../../icons/arrow-drop-down.svg";

const Styles = createGlobalStyle`
.book {
  width: 140px;
}

.book-title,
.book-authors {
  font-size: 0.8em;
}

.book-title {
  margin-top: 10px;
}

.book-authors {
  color: #999;
}

.book-top {
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
}

.book-shelf-changer {
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${arrowDropDownIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.book-shelf-changer select {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.book-cover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
}

.book-cover-title {
  padding: 20px 10px 0;
  text-align: center;
  font-size: 0.8em;
}
`;

export default Styles;
