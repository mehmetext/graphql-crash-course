"use server";

import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getHome = async (searchParams: {
  search: string;
  category: string;
}) => {
  const { search, category } = searchParams;

  const { data } = await client.query({
    query: gql`
      query GetBooks($search: String, $category: String) {
        books(search: $search, category: $category) {
          id
          title
          price
          category
          description
          coverImage
          author {
            name
          }
        }
        categories
      }
    `,
    variables: {
      search,
      category,
    },
  });

  return data as {
    books: Book[];
    categories: string[];
  };
};
