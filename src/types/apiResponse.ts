import type { Author, Publisher, Category, Book, Order } from "./apiTypes";

export interface WritersResponseType {
	count: number;
	next: string | null;
	previous: string | null;
	results: Author[];
}

export interface PublicationsResponseType {
	count: number;
	next: string | null;
	previous: string | null;
	results: Publisher[];
}

export interface HomepageBooksSection {
	books: Book[];
	hasMore: boolean;
    categoryId: number;
}

export interface HomepageAuthorsSection {
	authors: Author[];
	hasMore: boolean;
}

export interface HomepagePublishersSection {
	publishers: Publisher[];
	hasMore: boolean;
}

export interface HomepageData {
	categories: Category[];
	books: {
		[ categoryName: string ]: HomepageBooksSection;
	};
	authors: HomepageAuthorsSection;
	publishers: HomepagePublishersSection;
}


export interface CategoryBooksResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Book[];
    category: Category;
    hasMore?: boolean;
}


export interface BooksResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Book[];
}


export interface WritersBooksResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Book[];
	author: Author;
}

export interface PublishersBooksResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Book[];
	publisher: Author;
}


export default interface OrdersResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Order[];
}