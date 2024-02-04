import EastIcon from "@mui/icons-material/East";
import { DocumentType } from "../../interfaces/documentType";
import Accordion from "../wrapper/accordion/Accordion";
import "./Document.scss";

interface DocumentProps {
  id: string;
  className?: string;
  title: string;
  items: DocumentType[];
  onItemSelect: (item: DocumentType) => void;
}

function Document(props: DocumentProps) {
  const onItemClick = (item: DocumentType) => {
    props.onItemSelect(item);
  };

  const getItemList = () => {
    return (
      <>
        {props.items?.map((item: DocumentType) => (
          <div className="document-item" key={item.id}>
            <span>{item.text}</span>
            <div className="document-icon-container">
              <EastIcon className={"document-icon"} onClick={() => onItemClick(item)} />
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={"document-container " + props.className}>
      <Accordion buttonText={props.title} content={getItemList()}></Accordion>
    </div>
  );
}

export default Document;
