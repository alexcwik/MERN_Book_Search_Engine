import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
<<<<<<< HEAD
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
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
}
`;

export const ADD_USER = gql`
<<<<<<< HEAD
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
=======
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
        _id
        username
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
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
        bookId
        image
        link
        title
<<<<<<< HEAD
        description
      }
    }
    token
  }
}
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
        {
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
=======
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
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
}
`;