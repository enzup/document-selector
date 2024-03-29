import { BehaviorSubject } from "rxjs";
import documentData from "../data/document-data.json";
import { DocumentGroup, DocumentType } from "../interfaces/documentType";

const originalList = JSON.parse(JSON.stringify(documentData));

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

export const selectAllDocuments = () => {
	const currentSelectedList = selectedDocumentList$.value;
	const allDocList = allDocumentList$.value;
	allDocList.forEach((documentGroup: DocumentGroup) => {
		documentGroup.items.forEach((item) => {
			currentSelectedList.push(item);
		});
	});
	selectedDocumentList$.next(currentSelectedList);
	const emptyAllList = allDocList.map(documentGroup => {
		return {
			...documentGroup,
			items: []
		};
	});
	allDocumentList$.next(emptyAllList);
};

export const removeAllSelectedDocuments = () => {
	allDocumentList$.next(JSON.parse(JSON.stringify(originalList)));
	selectedDocumentList$.next([]);
};