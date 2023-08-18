// webpack.config.js
const path = require('path');
const WebpackBar = require('webpackbar'); // 打包进度条
const { CleanWebpackPlugin } = require("clean-webpack-plugin") // 清除打包目录 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html模板 快速生成html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离 将css抽离成一个单独的文件

const { VueLoaderPlugin } = require('vue-loader') // vue-loader 用于解析.vue文件


module.exports = (env) => {
    return {
        mode: 'development', // 开发模式
        context: path.resolve(__dirname, 'src'), //  设置上下文
        entry: {
            app: "./main.ts" // 设置入口配置
        },
        output: {
            path: path.resolve(__dirname, "dist"), // 设置打包后的文件夹
            filename: "[name].[hash:8].js", // 设置打包后的文件名,
            publicPath: process.env.BASE_URL // 设置公共路径
        },
        module: {
            // 设置loader 解析规则 
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader' // 解析es6
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader", // 解析loader 
                            options: { babelrc: true } // 设置babel配置文件
                        },
                        {
                            loader: "ts-loader", // 解析ts
                            options: { appendTsSuffixTo: [/\.vue$/] } // 设置ts配置文件
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader, // css抽离
                            options: { hmr: !env.production } // 热更新
                        },
                        'css-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'], // 设置解析文件后缀
            alias: {
                '@': path.resolve(__dirname, 'src'), // 设置别名
            }
        },
        plugins: [
            new WebpackBar(), // 打包进度条
            new CleanWebpackPlugin(), // 清除打包目录
            new HtmlWebpackPlugin({ // html模板
                template: path.resolve(__dirname, 'public/index.html'), // 设置模板路径
                filename: 'index.html', // 设置打包后的文件名
                title: 'vue3.0', // 设置title
                favicon: path.resolve(__dirname, 'public/favicon.ico'), // 设置favicon
                minify: { // 设置压缩
                    removeComments: true, // 删除注释
                    collapseWhitespace: true, // 删除空格
                    removeAttributeQuotes: true, // 删除双引号
                    collapseBooleanAttributes: true, // 省略只有 boolean 值的属性值 例如：readonly checked
                    removeScriptTypeAttributes: true, // 删除script标签的type属性
                    removeStyleLinkTypeAttributes: true, // 删除style和link标签的type属性
                    minifyJS: true, // 压缩内联js
                    minifyCSS: true, // 压缩内联css
                    minifyURLs: true // 压缩内联URL
                }
            }),
            new MiniCssExtractPlugin({ // css抽离
                filename: '[name].css', // 设置打包后的文件名
            }),
            new VueLoaderPlugin() // vue-loader
        ],
        // optimization 优化项 
        optimization: {
            runtimeChunk: 'single', // 设置运行时代码分割
            splitChunks: { // 设置代码分割
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        devtool: 'source-map', // 设置source-map 推荐选择使用高质量 SourceMap 进行生产构建。
        // 开发环境服务器设置
        devServer: {
            contentBase: path.join(__dirname, 'src/public'),  // 设置静态资源目录
            publicPath: process.env.BASE_URL, // 设置公共路径
            index: './index.html', // 设置默认打开的文件
            hot: true, // 设置热更新
            port: 8080, // 设置端口号
            quiet: true, // 设置不显示打包日志
            open: true, // 设置自动打开浏览器
            overlay: {
                warnings: true, // 设置警告信息
                errors: true // 设置错误信息
            },
            historyApiFallback: true,  // 设置history模式
        }
    }
}