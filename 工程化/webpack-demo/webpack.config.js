const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const FileListPlugin = require('./plugins/file-list.js')
const CLDistPlugin = require('./plugins/CL-dist.js') 

module.exports = {
    // entry: './src/index.js',
    entry: {
        app: "./src/index.js",
        another:'./src/another-module.js'
    },
    // mode:'production',//生产环境默认使用treeshaking
    //只引用需要使用的部分而不是全部的库文件
    // devtool:'inline-source-map',
    // devServer:{
    //     contentBase:'./dist',
    //     hot: true
    // },
    
    output:{
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        chunkFilename:'[name].boundle.js'
    },
    // optimization:{
    //     splitChunks:{
    //         chunks:'all'
    //     }
    // },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test:/\.html$/,
            //     use:[
            //         'html-loader'
            //     ]
            // },
            {
                test:/\.txt$/,
                use:[{
                    // loader:path.resolve(__dirname,'loaders/loadertest1.js')
                    loader:'loadertest1'
                },
                {
                    // loader:path.resolve(__dirname,'loaders/loaderTest.js'),
                    loader:'loaderTest',
                    options:{
                        name: "test"
                    }
                }]
            },
            {
                test:/\.md$/,
                use:[
                {
                    loader:'html-loader'
                },
                {
                    // loader:path.resolve(__dirname,'loaders/loadertest1.js')
                    loader:'lhmd-to-html-loader',
                    options:{
                        html: true,
                        linkify: true,
                        typographer: true
                    }
                }]
            }
        ]
    },
    resolveLoader:{
        modules:[
            'node_modules',
            path.resolve(__dirname,'loaders')
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: './src/public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FileListPlugin(),
        new CLDistPlugin()
    ]
    //         {
    //             test:/\.(png|svg|jpg|gif)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test:/\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
}