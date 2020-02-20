export enum ActionTypes {
  setBooks = 'books/setBooks',
  updateBooks = 'books/updateBooks',
  addBooks = 'books/addBooks',
  deleteBooks = 'books/deleteBooks',
  fetchStart = 'books/fetchStart',
  fetchEnd = 'books/fetchEnd',
}

export interface Book {
  id?: string;
  title: string;
  author: string;
  publishedDate: string;
  image: string;
  quantity: number;
  price: number;
}

export interface Books {
  [id: string]: Book;
}

export interface BooksReducer {
  books: Book[];
  loading: boolean;
  hasLoaded: boolean;
  errorMessage: string;
}
