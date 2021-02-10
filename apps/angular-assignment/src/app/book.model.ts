/* eslint-disable @typescript-eslint/ban-types */

export interface Book {
  kind: string;
  totalItems: number;
  items: BookDetails[];
}

export interface BookDetails {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: {
    title?: string;
    description?: string;
    ratingsCount?: string;
    pageCount?: string;
    language?: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    publisher?: string;
  };
  saleInfo?: object;
  accessInfo?: object;
  searchInfo?: object;
  purchaseInfo?: object;
  removeCartSymbole?: boolean;
}
