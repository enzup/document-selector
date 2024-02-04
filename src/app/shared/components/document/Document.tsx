import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import { DocumentType } from "../../interfaces/documentType";
import Accordion from "../wrapper/accordion/Accordion";
import "./Document.scss";

interface DocumentProps {
  id: string;
  className?: string;
  title: string;
  items: { id: string; text: string }[];
  onItemSelect: (item: DocumentType) => void;
}

function Document(props: DocumentProps) {
  const [renderingList, setRenderingList] = useState(props.items);

  const onItemClick = (item: { id: string; text: string }) => {
    props.onItemSelect({ ...item, parentId: props.id });
    setRenderingList((prevState) => prevState.filter((stateItem) => stateItem.id !== item.id));
  };

  const getItemList = (list: { id: string; text: string }[]) => {
    return (
      <>
        {list.map((item) => (
          <div className="document-item">
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
      <Accordion buttonText={props.title} content={getItemList(renderingList)}></Accordion>
    </div>
  );
}

export default Document;
