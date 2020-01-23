const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

// Don't open browser as application starts
process.env.BROWSER = 'none';
// Don't generate source map in build
process.env.GENERATE_SOURCEMAP = 'false';

module.exports = {
  webpack: {
    plugins: [
      ...(process.env.NODE_ENV === 'development' ? [new WebpackBar()] : []),
      ...(process.env.npm_lifecycle_event === 'analyze'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: true })]
        : [])
    ]
  }
};
