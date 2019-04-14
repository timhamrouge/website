const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

//no entry point set but webpack 4 provides a default one out-of-the-box ./src/index.js (we can override this)

module.exports = {
  module: {
   rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' } //attached babel as our loader, with rules which are matched to requests when modules are created
      }
    ]
  },
  mode: 'development', //for defining webpack dev server and other stuff. Set production mode lster in package.json
  devServer: { //basic options - https://webpack.js.org/configuration/dev-server/#devserver
    historyApiFallback: true,
    compress: true,
    port: 3030,
    open: true
  },
  plugins: [ //used to serve our webpack bundles, generates ./dist/index.html from template file under ./src
    HtmlWebpackPluginConfig
  ]
};