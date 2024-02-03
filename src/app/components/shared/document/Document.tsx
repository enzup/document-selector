import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import Accordion from "../../ui/Accordion";
import "./Document.scss";

interface DocumentProps {
  onItemSelect?: (item: string) => void;
}

const data = {
  title: "Non-Compete Agreements",
  id: "Document_1",
  items: ["Alabama", "California", "Colorado", "Florida", "Illinois"],
};

function Document(props: DocumentProps) {
  const [renderingList, setRenderingList] = useState(data.items);

  const onItemClick = (item: string) => {
    props.onItemSelect?.(item);
    setRenderingList((prevState) => prevState.filter((stateItem) => stateItem !== item));
  };

  const getItemList = (list: string[]) => {
    return (
      <>
        {list.map((item) => (
          <div className="document-item">
            <span>{item}</span>
            <EastIcon className={"document-item-icon"} onClick={() => onItemClick(item)} />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="document-container">
      <Accordion buttonText={data.title} content={getItemList(renderingList)}></Accordion>
    </div>
  );
}

export default Document;
