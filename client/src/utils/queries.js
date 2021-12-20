<<<<<<< HEAD
import { gql } from '@apollo-client';
=======

import { gql } from '@apollo/client';

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb


export const GET_ME = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
<<<<<<< HEAD
        # _id
=======
        _id
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
<<<<<<< HEAD
=======

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
