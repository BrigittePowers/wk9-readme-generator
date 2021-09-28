const axios = require('axios');

const api = {
    async getUser(response) {
        try { let feedback = await axios
            
        // Sample URL: https://api.github.com/users/connietran-dev
            .get(`https://api.github.com/users/${response.username}`);
            return feedback.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;