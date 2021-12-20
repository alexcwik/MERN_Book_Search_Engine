const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
<<<<<<< HEAD
<<<<<<< HEAD
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');

=======
const { typedDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
/* const routes = require('./routes'); */
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
=======
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');
const { typedDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');


>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => { console.log(`🌍 Now listening on localhost:${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
});
