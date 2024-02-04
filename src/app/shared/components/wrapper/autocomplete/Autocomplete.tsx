import { Autocomplete as AutocompleteMUI, TextField } from "@mui/material";
import "./Autocomplete.scss";

interface AutocompleteProps {
  options: string[];
  placeholder: string;
}

function Autocomplete(props: AutocompleteProps) {
  return (
    <div className="autocomplete-container">
      <AutocompleteMUI
        size="small"
        disablePortal
        options={props.options}
        renderInput={(params) => <TextField {...params} placeholder={props.placeholder} />}
      />
    </div>
  );
}

export default Autocomplete;
