export interface DocumentType {
	id: string;
	text: string;
	parentId: string;
}

export interface DocumentGroup {
	title: string,
	id: string,
	items: DocumentType[];
}