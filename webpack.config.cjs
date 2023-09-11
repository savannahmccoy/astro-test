// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'src/dist'), // Output directory
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|astro)$/, // Apply to .js and .jsx files
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader', // Use Babel for JavaScript/JSX files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },
        },
        // {
        //   loader: 'esbuild-loader',
        //   options: {
        //     loader: 'jsx', // Set the loader to 'jsx'
        //   },
        // }
      ],
      },
    ],
  },
};