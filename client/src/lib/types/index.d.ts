interface Book {
  id: string;
  title: string;
  authorId: string;
  author: Author;
  description?: string;
  price: number;
  coverImage?: string;
  category: string;
}

interface Author {
  id: string;
  name: string;
  books: Book[];
}

interface BookInput {
  title?: string;
  authorId?: string;
  description?: string;
  price?: number;
  coverImage?: string;
  category?: string;
}
