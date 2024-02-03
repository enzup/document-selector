import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Accordion as AccordionMUI, AccordionSummary } from "@mui/material";
import "./Accordion.scss";

interface AccordionProps {
  buttonText: string;
  content: any;
  isExpanded?: boolean;
  id?: string;
}

function Accordion(props: AccordionProps) {
  return (
    <div className="accordion-container">
      <AccordionMUI>
        <AccordionSummary className="accordion-button" id={props.id || ""} expandIcon={<ExpandMoreIcon />}>
          {props.buttonText}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">{props.content}</AccordionDetails>
      </AccordionMUI>
    </div>
  );
}

export default Accordion;
