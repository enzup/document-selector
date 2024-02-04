import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import WestIcon from "@mui/icons-material/West";
import { useEffect, useState } from "react";
import DocumentList from "src/app/shared/components/document/document-list/DocumentList";
import Autocomplete from "src/app/shared/components/wrapper/autocomplete/Autocomplete";
import SearchInput from "src/app/shared/components/wrapper/search-input/SearchInput";
import { DocumentType } from "src/app/shared/interfaces/documentType";
import { documentList$ } from "src/app/shared/utils/SelectedDocument";
import "./DocumentSelector.scss";

function DocumentSelector() {
  const [documentList, setDocumentList] = useState([] as DocumentType[]);

  useEffect(() => {
    const observable = documentList$.subscribe((documentList: DocumentType[]) => {
      setDocumentList(documentList);
    });

    return () => {
      observable.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(documentList);
  }, [documentList]);

  return (
    <div className="ds-container">
      <div className="ds-available">
        <span className="bold">Available Documents</span>
        <SearchInput></SearchInput>
        <span className="fs-14 bold">Filter by:</span>
        <div className="ds-available-filter-group">
          <Autocomplete placeholder="Job Templates"></Autocomplete>
          <Autocomplete placeholder="Locations"></Autocomplete>
        </div>
        <div className="ds-available-filter-group">
          <Autocomplete placeholder="Subsidiary"></Autocomplete>
          <Autocomplete placeholder="Seniority"></Autocomplete>
        </div>
        <DocumentList></DocumentList>
      </div>
      <div className="ds-selected">
        <span className="bold">Selected Documents</span>
        <SearchInput></SearchInput>

        {!documentList.length && (
          <div className="ds-selected-empty">
            <WestIcon className="ds-selected-empty-icon"></WestIcon>
            <span className="ds-selected-empty-text">
              Select documents from the left panel to have employees review them and provide a signature acknowledging review
            </span>
          </div>
        )}

        {documentList.length && (
          <div className="ds-selected-list">
            {documentList.map((document: DocumentType) => {
              return (
                <div className="ds-selected-list-item">
                  <span>
                    <CheckIcon className="ds-selected-list-item-check"></CheckIcon>
                    <span className="bold">{document.text}</span>
                  </span>
                  <div className="ds-selected-list-item-cancel-container">
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