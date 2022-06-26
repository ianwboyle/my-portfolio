module.exports = {
  TrailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  }
  
};