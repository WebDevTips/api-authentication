module.exports = {
    signUp: async (req, res, next) => {
        // validate email & password
        console.log('UsersController.signUp() Called!!!');
    },

    signIn: async (req, res, next) => {
        // generate a token
        console.log('UsersController.signIn() Called!!!');
    },

    home: async (req, res, next) => {
        console.log('UsersController.home() Called!!!');
    },
};
