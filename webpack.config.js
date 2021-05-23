const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options = {}) => {

  const {mode = "development"} = options;
  const isProd = mode === "production";
  const isDev = mode === "development"

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"
    ]
  }

  const getPlugins = () => {
    const plugins =  [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ]

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: "css/main.css"
      }))
    }

    return plugins;
  };


  return {
    mode: isProd ? "production" : isDev && "development",

    module: {
      rules: [

        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },

        //- Загрузка картинок
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]"
              }
            }
          ]
        },

        //- Загрузка шрифтов
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        },

        //- Загрузка стилей
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },
        {
          test: /\.scss$/,
          use: [...getStyleLoaders(), "sass-loader"]
        }
      ]
    },

    plugins: getPlugins(),

    devServer: {
      open: true
    }

  }
};
