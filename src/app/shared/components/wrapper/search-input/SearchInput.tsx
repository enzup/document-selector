import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import "./SearchInput.scss";

function SearchInput(props: any) {
  return (
    <div className="input-container">
      <TextField placeholder="Search"></TextField>
      <SearchIcon className="input-icon"></SearchIcon>
    </div>
  );
}

export default SearchInput;
