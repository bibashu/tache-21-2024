import s from "./style.module.css";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <div className={s.searchdiv}>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
