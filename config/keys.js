if (process.env.NODE_ENV === 'production') {
    // in production, return prod set of keys
    module.exports = require('./prod');
} else {
    // in development, return dev set of keys
    module.exports = require('./dev');
}

// prod: 
// mongodb+srv://skylord:4jEtTkqeEXl6EQ0I@cluster0-o7yvk.mongodb.net/test?retryWrites=true&w=majority
// gid: 
// gsecret: 