import { useEffect, useState } from "react";
import { DocumentGroup, DocumentType } from "../../../interfaces/documentType";
import { addSelectedDocument, allDocumentList$ } from "../../../utils/DocumentDataService";
import Switch from "../../wrapper/switch/Switch";
import Document from "../Document";
import "./DocumentList.scss";

function DocumentList() {
  const [count, setCount] = useState(0);
  const [allDocumentList, setAllDocumentList] = useState([] as DocumentGroup[]);

  useEffect(() => {
    const subscription = allDocumentList$.subscribe((documentData: DocumentGroup[]) => {
      setAllDocumentList([...documentData]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let counter = 0;
    allDocumentList.forEach((document: DocumentGroup) => (counter += document.items.length));
    setCount(counter);
  }, [allDocumentList]);

  const onDocumentSelect = (document: DocumentType) => {
    addSelectedDocument(document);
  };

  return (
    <div className="document-list-container">
      <div className="document-list-count">
        <span className="fs-14 bold">{count} Available Documents</span>
        <Switch label="Select All"></Switch>
      </div>
      {allDocumentList.map((document: DocumentGroup, i) => {
        return (
          <Document
            key={document.id}
            className={
              i === 0
                ? "ds-available-accordion--first"
                : i === allDocumentList.length - 1
                ? "ds-available-accordion--last"
                : "ds-available-accordion"
            }
            id={document.id}
            title={document.title}
            items={document.items}
            onItemSelect={onDocumentSelect}
          ></Document>
        );
      })}
    </div>
  );
}

export default DocumentList;
