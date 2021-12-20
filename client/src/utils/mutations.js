import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
<<<<<<< HEAD
=======
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
        _id
        username
    }
    }
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
=======
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
}
`;

export const ADD_USER = gql`
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
<<<<<<< HEAD
=======
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
        _id
        username
=======
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
    }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
    username
    email
    bookCount
    savedBooks {
        authors
        description
<<<<<<< HEAD
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
=======
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
        bookId
        image
        link
        title
<<<<<<< HEAD
<<<<<<< HEAD
        description
=======
     
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
      }
    }
    token
  }
}
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId:$bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                bookId
                authors
                image
                link
                title
                description
            }
        }
<<<<<<< HEAD
=======
=======

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
    }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
    username
    email
    bookCount
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
    }
<<<<<<< HEAD
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
=======
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
}
`;