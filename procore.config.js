const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = ({ env }) => ({
  app: {
    moduleFederation: {
      id: 'customBlock',
      exposes: {
        // path relative to "src"
        CustomComponent: 'CustomComponent',
      },
  },
});
