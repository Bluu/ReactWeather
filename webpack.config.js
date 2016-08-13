module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      main: 'app/components/main.jsx',
      nav: 'app/components/nav.jsx',
      weather: 'app/components/weather.jsx',
      'weather-info': 'app/components/weather-info.jsx',
      'weather-form': 'app/components/weather-form.jsx',
      about: 'app/components/about.jsx',
      examples: 'app/components/examples.jsx',
      'open-weather-map': 'app/api/open-weather-map.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
