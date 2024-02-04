import styled from "@emotion/styled";
import { FormControlLabel, Switch as SwitchMUI, SwitchProps } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => <SwitchMUI disableRipple {...props} />)(() => ({
  width: 50,
  height: 26,
  padding: 0,
  "+ .MuiFormControlLabel-label": {
    fontSize: 14,
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#1890ff",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

function Switch(props: { label: string }) {
  return (
    <div className="switch-container">
      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label={props.label} />
    </div>
  );
}

export default Switch;
