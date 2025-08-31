const path = require('path');

module.exports = ({ env }) => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: path.join(__dirname, '..', 'dataop', 'data.db'),
        },
        useNullAsDefault: true,
    },
});