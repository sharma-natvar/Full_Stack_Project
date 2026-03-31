/**
 * All custom validations are exported from here 👇
 */
module.exports = {
    /**
     * Create a common function for check mongodb's objectId is valid or not.
     */
    objectId: (value, helpers) => {
        if (!value.match(/^[0-9a-fA-F]{24}$/)) {
            return helpers.message('"{{#label}}" must be a valid mongo id');
        }
        return value;
    },

    /**
     * Create a common function for check the password is valid or not.
     */
    password: (value, helpers) => {
        if (value.length < 8) {
            return helpers.message('password must be at least 8 characters , min_characters');
        }
        /* !value.match(/\d/) || For password must contain at least 1 number */
        if (!value.match(/[a-zA-Z]/)) {
            return helpers.message(
                'password must contain at least 1 letter and 1 number , letter_number'
            );
        }
        return value;
    },
};
