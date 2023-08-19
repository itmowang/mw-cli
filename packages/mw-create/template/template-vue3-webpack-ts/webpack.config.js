// webpack.config.js 
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackbar = require('webpackbar');

module.exports = {
    mode:'development',
    entry: './src/main.ts',
    resolve :{
        extensions:['.ts','.js','.vue']
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpackbar()
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                loader:'ts-loader',
                options:{
                    appendTsSuffixTo:[/\.vue$/]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    target:'web',
    devServer:{
        static:{
            directory:path.join(__dirname,'public')
        },
        port:8080,
    }
}