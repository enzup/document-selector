import { useEffect, useState } from "react";
import { DocumentType } from "src/app/shared/interfaces/documentType";
import { addSelectedDocument } from "src/app/shared/utils/SelectedDocument";
import Switch from "../../wrapper/switch/Switch";
import Document from "../Document";
import "./DocumentList.scss";

const data = [
  {
    title: "Drug Policies",
    id: "drug_policies",
    items: [
      { id: "dp_alabama", text: "Alabama - Drug Policies" },
      { id: "dp_california", text: "California - Drug Policies" },
      { id: "dp_colorado", text: "Colorado - Drug Policies" },
      { id: "dp_florida", text: "Florida - Drug Policies" },
      { id: "dp_illinois", text: "Illinois - Drug Policies" },
      { id: "dp_kansas", text: "Kansas - Drug Policies" },
      { id: "dp_ny", text: "New York - Drug Policies" },
      { id: "dp_utah", text: "Utah - Drug Policies" },
    ],
  },
  {
    title: "Employee Handbooks",
    id: "employee_handbooks",
    items: [
      { id: "eh_alabama", text: "Alabama - Employee Handbooks" },
      { id: "eh_california", text: "California - Employee Handbooks" },
      { id: "eh_colorado", text: "Colorado - Employee Handbooks" },
      { id: "eh_florida", text: "Florida - Employee Handbooks" },
      { id: "eh_illinois", text: "Illinois - Employee Handbooks" },
      { id: "eh_kansas", text: "Kansas - Employee Handbooks" },
      { id: "eh_ny", text: "New York - Employee Handbooks" },
      { id: "eh_utah", text: "Utah - Employee Handbooks" },
    ],
  },
  {
    title: "Equipment Selection",
    id: "equipment_selection",
    items: [
      { id: "es_alabama", text: "Alabama - Equipment Selection" },
      { id: "es_california", text: "California - Equipment Selection" },
      { id: "es_colorado", text: "Colorado - Equipment Selection" },
      { id: "es_florida", text: "Florida - Equipment Selection" },
      { id: "es_illinois", text: "Illinois - Equipment Selection" },
      { id: "es_kansas", text: "Kansas - Equipment Selection" },
      { id: "es_ny", text: "New York - Equipment Selection" },
      { id: "es_utah", text: "Utah - Equipment Selection" },
    ],
  },
  {
    title: "Non-Compete Agreements",
    id: "non_compete_agreements",
    items: [
      { id: "nca_alabama", text: "Alabama - Non-Compete Agreements" },
      { id: "nca_california", text: "California - Non-Compete Agreements" },
      { id: "nca_colorado", text: "Colorado - Non-Compete Agreements" },
      { id: "nca_florida", text: "Florida - Non-Compete Agreements" },
      { id: "nca_illinois", text: "Illinois - Non-Compete Agreements" },
      { id: "nca_kansas", text: "Kansas - Non-Compete Agreements" },
      { id: "nca_ny", text: "New York - Non-Compete Agreements" },
      { id: "nca_utah", text: "Utah - Non-Compete Agreements" },
    ],
  },
  {
    title: "Payroll Handbook",
    id: "payroll_handbook",
    items: [
      { id: "ph_alabama", text: "Alabama - Payroll Handbook" },
      { id: "ph_california", text: "California - Payroll Handbook" },
      { id: "ph_colorado", text: "Colorado - Payroll Handbook" },
      { id: "ph_florida", text: "Florida - Payroll Handbook" },
      { id: "ph_illinois", text: "Illinois - Payroll Handbook" },
      { id: "ph_kansas", text: "Kansas - Payroll Handbook" },
      { id: "ph_ny", text: "New York - Payroll Handbook" },
      { id: "ph_utah", text: "Utah - Payroll Handbook" },
    ],
  },
  {
    title: "PTO Policy",
    id: "pto_policy",
    items: [
      { id: "pp_alabama", text: "Alabama - PTO Policy" },
      { id: "pp_california", text: "California - PTO Policy" },
      { id: "pp_colorado", text: "Colorado - PTO Policy" },
      { id: "pp_florida", text: "Florida - PTO Policy" },
      { id: "pp_illinois", text: "Illinois - PTO Policy" },
      { id: "pp_kansas", text: "Kansas - PTO Policy" },
      { id: "pp_ny", text: "New York - PTO Policy" },
      { id: "pp_utah", text: "Utah - PTO Policy" },
    ],
  },
  {
    title: "Safety Manuals",
    id: "safety_manuals",
    items: [
      { id: "sm_alabama", text: "Alabama - Safety Manuals" },
      { id: "sm_california", text: "California - Safety Manuals" },
      { id: "sm_colorado", text: "Colorado - Safety Manuals" },
      { id: "sm_florida", text: "Florida - Safety Manuals" },
      { id: "sm_illinois", text: "Illinois - Safety Manuals" },
      { id: "sm_kansas", text: "Kansas - Safety Manuals" },
      { id: "sm_ny", text: "New York - Safety Manuals" },
      { id: "sm_utah", text: "Utah - Safety Manuals" },
    ],
  },
  {
    title: "Sexual Harassment",
    id: "sexual_harassment",
    items: [
      { id: "sh_alabama", text: "Alabama - Sexual Harassment" },
      { id: "sh_california", text: "California - Sexual Harassment" },
      { id: "sh_colorado", text: "Colorado - Sexual Harassment" },
      { id: "sh_florida", text: "Florida - Sexual Harassment" },
      { id: "sh_illinois", text: "Illinois - Sexual Harassment" },
      { id: "sh_kansas", text: "Kansas - Sexual Harassment" },
      { id: "sh_ny", text: "New York - Sexual Harassment" },
      { id: "sh_utah", text: "Utah - Sexual Harassment" },
    ],
  },
];

function DocumentList() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    data.forEach((document) => (counter += document.items.length));
    setCount(counter);
  }, []);

  const onDocumentSelect = (document: DocumentType) => {
    addSelectedDocument(document);
  };

  return (
    <div className="document-list-container">
      <div className="document-list-count">
        <span className="fs-14 bold">{count} Available Documents</span>
        <Switch label="Select All"></Switch>
      </div>
      {data.map((document, i) => {
        return (
          <Document
            className={
              i === 0 ? "ds-available-accordion--first" : i === data.length - 1 ? "ds-available-accordion--last" : "ds-available-accordion"
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
