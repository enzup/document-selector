import { BehaviorSubject } from "rxjs";
import documentData from "../data/document-data.json";
import { DocumentType } from "../interfaces/documentType";

export const allDocumentList$ = new BehaviorSubject(documentData);
export const selectedDocumentList$ = new BehaviorSubject([] as DocumentType[]);

export const getSelectedDocuments = () => {
	return selectedDocumentList$.value;
};

export const addSelectedDocument = (document: DocumentType) => {
	// Add the document to the list of selected documents
	const currentSelectedList = selectedDocumentList$.value;
	currentSelectedList.push(document);
	selectedDocumentList$.next(currentSelectedList);
	// Remove the same document from the all documents rendering list
	const allDocList = allDocumentList$.value;
	const documentGroup = allDocList.find(group => group.id === document.parentId)!;
	const indexToBeRemoved = documentGroup.items.findIndex((item) => item.id === document.id);
	documentGroup.items.splice(indexToBeRemoved, 1);
	allDocumentList$.next(allDocList);
};

export const removeDocument = (document: DocumentType) => {
	// Remove the document from the list of selected documents
	const currentList = selectedDocumentList$.value;
	const index = currentList.findIndex(ob => ob.id === document.id);
	currentList.splice(index, 1);
	selectedDocumentList$.next(currentList);
	// Add the document back to the all documents rendering list
	const allDocList = allDocumentList$.value;
	const documentGroup = allDocList.find(group => group.id === document.parentId)!;
	documentGroup.items.push(document);
	allDocumentList$.next(allDocList);
};

export const setAllSelectedDocuments = (documents: DocumentType[]) => {
	selectedDocumentList$.next(documents);
};

export const removeAllSelectedDocuments = (documents: DocumentType[]) => {
	selectedDocumentList$.next([]);
};