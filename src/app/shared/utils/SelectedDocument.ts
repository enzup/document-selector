import { BehaviorSubject } from "rxjs";
import { DocumentType } from "../interfaces/documentType";

export const documentList$ = new BehaviorSubject([] as DocumentType[]);

export const getSelectedDocuments = () => {
	return documentList$.value;
};

export const addSelectedDocument = (document: DocumentType) => {
	const currentList = documentList$.value;
	currentList.push(document);
	documentList$.next(currentList);
};

export const setSelectedDocuments = (documents: DocumentType[]) => {
	documentList$.next(documents);
};