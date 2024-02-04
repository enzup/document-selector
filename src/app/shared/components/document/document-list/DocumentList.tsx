import { useEffect, useState } from "react";
import { DocumentGroup, DocumentType } from "../../../interfaces/documentType";
import { addSelectedDocument, allDocumentList$, removeAllSelectedDocuments, selectAllDocuments } from "../../../utils/DocumentDataService";
import { labels } from "../../../utils/labels";
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

  const onDocumentSelectorToggle = (value: boolean) => {
    if (value) {
      selectAllDocuments();
    } else {
      removeAllSelectedDocuments();
    }
  };

  return (
    <div className="document-list-container">
      <div className="document-list-count">
        <span className="fs-14 bold">
          {count} {labels.documentSelector.availableDocuments}
        </span>
        <Switch label={labels.documentSelector.toggleText} onToggle={onDocumentSelectorToggle}></Switch>
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
