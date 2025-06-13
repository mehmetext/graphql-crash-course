import { Author, Book, Resolvers } from "../generated/graphql";
import authors from "../mock/authors";
import books from "../mock/books";

const resolvers: Resolvers = {
  Query: {
    books: (_, { search, category }) => {
      return books.filter((book) => {
        if (
          search &&
          !book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
          return false;
        if (category && book.category !== category) return false;
        return true;
      }) as Book[];
    },
    book: (_, { id }) => books.find((book) => book.id === id) as Book,
    authors: () => authors as Author[],
    author: (_, { id }) => authors.find((author) => author.id === id) as Author,
    categories: () => {
      const categories = new Set<string>();
      books.forEach((book) => {
        categories.add(book.category);
      });
      return Array.from(categories);
    },
  },
  Book: {
    author: (book) =>
      authors.find((author) => author.id === book.authorId) as Author,
  },
  Author: {
    books: (author) =>
      books.filter((book) => book.authorId === author.id) as Book[],
  },
  Mutation: {
    addBook: (_, { title, authorId }) => {
      const newBook: Omit<Book, "author"> = {
        id: (books.length + 1).toString(),
        title,
        authorId,
        category: "Unknown",
        price: 0,
      };
      books.push(newBook);
      return newBook as Book;
    },
    updateBook: (_, { id, book: bookInput }) => {
      const book = books.find((book) => book.id === id);
      if (!book) throw new Error("Book not found");

      const updatedBook: Omit<Book, "author"> = {
        ...book,
        ...(bookInput as Book),
      };

      return updatedBook as Book;
    },
    deleteBook: (_, { id }) => {
      const index = books.findIndex((book) => book.id === id);
      if (index === -1) throw new Error("Book not found");
      books.splice(index, 1);
      return true;
    },
  },
};

export default resolvers;
