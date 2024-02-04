import { Autocomplete as AutocompleteMUI, TextField } from "@mui/material";
import "./Autocomplete.scss";

function Autocomplete(props: any) {
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];
  return (
    <div className="autocomplete-container">
      <AutocompleteMUI
        disablePortal
        options={options}
        renderInput={(params) => <TextField {...params} placeholder={props.placeholder} />}
      />
    </div>
  );
}

export default Autocomplete;
