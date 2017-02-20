// RequireJS common config

require.config({
  baseUrl: '/assets/js',
  paths: {
    styles: '../css'
  },
  config: {
    css: {
      useLinks: true
    }
  },
  // time to wait for dynamic requires before erroring out
  waitSeconds: 9
});
