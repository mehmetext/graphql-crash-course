import { Author } from "../generated/graphql";

const authors: Omit<Author, "books">[] = [
  {
    id: "1",
    name: "Fyodor Dostoyevski",
  },
  {
    id: "2",
    name: "George Orwell",
  },
  {
    id: "3",
    name: "Antoine de Saint-Exupéry",
  },
  {
    id: "4",
    name: "Paulo Coelho",
  },
];

export default authors;
