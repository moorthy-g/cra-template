const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    plugins: [
      ...(process.env.npm_lifecycle_event === 'analyze'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: true })]
        : [])
    ]
  }
};
