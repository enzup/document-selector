import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Accordion.scss";

interface AccordionProps {
  text: string;
  content: any;
  isExpanded?: boolean;
}

function Accordion(props: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded || false);

  return (
    <div className="accordion-container">
      <div className="accordion-button" onClick={() => setIsExpanded(!isExpanded)}>
        <span>{props.text}</span>
        <span>
          {!isExpanded && <FontAwesomeIcon icon={faAngleDown} />}
          {isExpanded && <FontAwesomeIcon icon={faAngleUp} />}
        </span>
      </div>

      {isExpanded && <div className="accordion-content">{props.content}</div>}
    </div>
  );
}

export default Accordion;
