"use server";

import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getHome = async () => {
  const { data } = await client.query({
    query: gql`
      query GetBooks {
        books {
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
  });

  return data as {
    books: Book[];
    categories: string[];
  };
};
