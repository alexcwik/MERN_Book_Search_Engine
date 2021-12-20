const { authenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return {token, user};
        },

        saveBook: async (parent, args, context) => {
            if (context.user) {
    const updatedUser =  await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: args.input } },
                { new: true }
            );
            return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        removeBook: async (parent, args, context) => {
            if(context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );
            return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
<<<<<<< HEAD
=======
Query: {
    me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            return userData;
        }
        throw new AuthenticationError('Not logged in');
    }
},
Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne( { email });
        if (!user) {
            throw new AuthenticationError('Incorrect credentials')
        }
        const correctPw = await user.isCorrectPassword(password);
        if(!correctPw) {
            throw new AuthenticationError('Incorrect credentials')
        }
        const token = signToken(user);
        return { token, user };
    },
    saveBook: async (parent, { book }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: {savedBooks: book} },
                { new: true }
            )
            return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!')
    },
    removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            )
            return updatedUser;
        }
    }
}
>>>>>>> fcc0ba6f2a3cefd53389fad8f5e14e4ea2f38f3f
=======

>>>>>>> a481bc14cbdbbbfa9df235bae66f6d81a973e1cb
};

module.exports = resolvers;