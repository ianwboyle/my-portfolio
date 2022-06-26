module.exports = {
  TrailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  }
  
};