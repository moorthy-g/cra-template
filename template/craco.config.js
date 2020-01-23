const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Don't open browser as application starts
process.env.BROWSER = 'none';
// Don't generate source map in build
process.env.GENERATE_SOURCEMAP = 'false';

module.exports = {
  webpack: {
    plugins: [
      ...(process.env.npm_lifecycle_event === 'analyze'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: true })]
        : [])
    ]
  }
};
