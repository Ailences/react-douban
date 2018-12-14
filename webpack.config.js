const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
// 导出 webpack 配置对象
module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [{
            test: /\.jpg|png|gif|bmp|jpeg$/,
            use: 'url-loader'
        }, {
            test: /\.ttf|svg|woff|woff2$/,
            use: 'url-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'less-loader']
        }, {
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "@": path.join(__dirname, './src')
        }
    }
}