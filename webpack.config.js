module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'promise-error-handler.js',
        library: {
            name: 'tryError',
            type: 'umd'
        }
    },
};