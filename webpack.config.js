const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const rulesForJavaScriptAndReact= {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};

const rulesForHtml= {
    test: /\.html$/,
    use: [
        {
            loader: 'html-loader'
        }
    ]
};

const rulesForStyles={
    test: /\.(css|scss)$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ]
};

const rulesImages= {
    test: /\.(png|jp(e*)g|svg|gif)$/,
       	use: [
          	{
         	loader: 'file-loader',
            	options: {
              		name: 'images/[hash]-[name].[ext]',
            		},
          	},
        ],
};

const rules = [rulesForJavaScriptAndReact, rulesForHtml, rulesForStyles, rulesImages];

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : "bundle.js",
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules
    },
    plugins: [
        new htmlWebpackPlugin( {
            template: './public/index.html',
            filename: './index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    }
}