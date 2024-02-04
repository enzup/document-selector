import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Accordion as AccordionMUI, AccordionSummary } from "@mui/material";
import { useState } from "react";
import "./Accordion.scss";

interface AccordionProps {
  buttonText: string;
  content: any;
  id?: string;
}

function Accordion(props: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onAccordionChanged = (event: any, expanded: boolean) => {
    setIsExpanded(expanded);
  };

  return (
    <div className="accordion-container">
      <AccordionMUI onChange={onAccordionChanged}>
        <AccordionSummary
          className={"accordion-button " + (isExpanded && "accordion-button--expanded")}
          id={props.id || ""}
          expandIcon={<ExpandMoreIcon className="accordion-button-icon" />}
        >
          {props.buttonText}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">{props.content}</AccordionDetails>
      </AccordionMUI>
    </div>
  );
}

export default Accordion;
