import gql from "graphql-tag";

export const FETCH_ALL_SONGS = gql`
  {
    getSongs {
      id
      artist
      title
      src
      img_src
    }
  }
`;