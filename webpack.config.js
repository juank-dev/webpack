const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        js: "./src/index.js",
        react: "./src/index_react.js",
        ts: "./src/index_ts.js"
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/i, //Acepta archivos JS
                exclude: /node_modules/,  // Que archivo excluye
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.jsx?$/, //typescript
                exclude: /node_modules/,  // Que archivo excluye
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.tsx?$/, //react
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i, //Acepta archivos html
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: "./css",
                    },
                  },
                  "css-loader",
                ],
              },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i, //Acepta archivos imagenes
                type:"asset",
                use: {
                      loader: 'image-webpack-loader',
                    },
            },
            {
                test: /\.(woff)$/i, //Acepta archivos imagenes
                /* use: ["file-loader?name=assets/[name].[ext]"], */ // no funciona se usa la lina de abajo
                type:"asset"
            },
        ]
    },
    plugins: [
        /* new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"./index.html"
        }), */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"./index.html",
            chunks: ["js"],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"./react.html",
            chunks: ["react"],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"./ts.html",
            chunks: ["ts"],
            hash: true
        }),
        new MiniCssExtractPlugin(),
    ]
}