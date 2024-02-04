import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import WestIcon from "@mui/icons-material/West";
import { useEffect, useState } from "react";
import DocumentList from "../../shared/components/document/document-list/DocumentList";
import Autocomplete from "../../shared/components/wrapper/autocomplete/Autocomplete";
import SearchInput from "../../shared/components/wrapper/search-input/SearchInput";
import filterData from "../../shared/data/filter-data.json";
import { DocumentType } from "../../shared/interfaces/documentType";
import { removeDocument, selectedDocumentList$ } from "../../shared/utils/DocumentDataService";
import { labels } from "../../shared/utils/labels";
import "./DocumentSelector.scss";

function DocumentSelector() {
  const [documentList, setDocumentList] = useState([] as DocumentType[]);

  useEffect(() => {
    const subscription = selectedDocumentList$.subscribe((documents: DocumentType[]) => {
      setDocumentList([...documents]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onRemoveDocument = (document: DocumentType) => {
    removeDocument(document);
  };

  return (
    <div className="ds-container">
      <div className="ds-available">
        <span className="bold">{labels.documentSelector.availableDocuments}</span>
        <SearchInput></SearchInput>
        <span className="fs-14 bold">{labels.documentSelector.filterBy}</span>
        <div className="ds-available-filter-group">
          <Autocomplete options={filterData.jobTemplates.options} placeholder={labels.documentSelector.jobTemplates}></Autocomplete>
          <Autocomplete options={filterData.locations.options} placeholder={labels.documentSelector.locations}></Autocomplete>
        </div>
        <div className="ds-available-filter-group">
          <Autocomplete options={filterData.subsidiary.options} placeholder={labels.documentSelector.subsidiary}></Autocomplete>
          <Autocomplete options={filterData.seniority.options} placeholder={labels.documentSelector.seniority}></Autocomplete>
        </div>
        <DocumentList></DocumentList>
      </div>
      <div className="ds-selected">
        <span className="bold">{labels.documentSelector.selectedDocuments}</span>
        <SearchInput></SearchInput>

        {!documentList.length && (
          <div className="ds-selected-empty">
            <WestIcon className="ds-selected-empty-icon"></WestIcon>
            <span className="ds-selected-empty-text">{labels.documentSelector.emptyText}</span>
          </div>
        )}

        {!!documentList.length && (
          <div className="ds-selected-list">
            {documentList.map((document: DocumentType) => {
              return (
                <div className="ds-selected-list-item" key={document.id}>
                  <span>
                    <CheckIcon className="ds-selected-list-item-check"></CheckIcon>
                    <span className="bold">{document.text}</span>
                  </span>
                  <div className="ds-selected-list-item-cancel-container" onClick={() => onRemoveDocument(document)}>
                    <CloseIcon className={"ds-selected-list-item-cancel"}></CloseIcon>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DocumentSelector;
