const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'promise-error-handler.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: {
            name: 'tryError',
            type: 'umd'
        }
    },
};