<<<<<<< HEAD
import { gql } from '@apollo/client';
=======
import { gql } from '@apollo-client';
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f


export const GET_ME = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
<<<<<<< HEAD
        _id
=======
        # _id
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
<<<<<<< HEAD
`;
=======
`;
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
