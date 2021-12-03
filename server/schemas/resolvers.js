const { authenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers {
    Query: {
        users: async () => {
            return User.find().populate('books');
        },
        user: async (parent, { username }) => {
            return User.findOne() ({username}).populate('books');
        },
        books: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Book.find(params).sort({ createdAt: -1});
        },
        book: async (parent, { bookId }) => {
            return Book.findOne({_id: bookId});
        },
        me: async (parent, args, context) => {
            if(context.user){
                return User.findOne({_id: context.user_id }).populate('thoughts');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create({ username, email, password});
            const token = signToken(user);
            return { token, user };
        },
        Login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

        }

    }

    module.exports = resolvers;