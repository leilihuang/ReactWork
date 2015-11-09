var webpack=require('webpack');
var path = require('path');
var node_modules=path.resolve(__dirname,'node_modules');
var reactPath=path.resolve(node_modules, 'react/dist/react.min.js');

var webConfig={
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/entries/main.jsx')],
    resolve: {
        alias: {
            'react': reactPath
        }
    },
    output:{
        path:'./build',
        filename:'index.js'
    },
    module:{
        loaders:[{
            test:/\.jsx$/,
            exclude:[node_modules],
            loader:'babel'
        }],
        noParse: [reactPath]
    }
};


module.exports = webConfig;