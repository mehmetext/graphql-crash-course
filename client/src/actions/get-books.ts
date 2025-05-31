"use server";

import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getBooks = async () => {
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
      }
    `,
  });

  return data.books as Book[];
};
