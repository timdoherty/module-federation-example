const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = ({ env }) => ({
  app: {
    webpackOverride(config) {
      config.plugin('moduleFederation').use(ModuleFederationPlugin, [
        {
          name: 'customBlock',
          // what does this do?
          library: { type: 'var', name: 'customBlock' },
          filename: 'remoteEntry.js',
          exposes: {
            CustomComponent: './src/CustomComponent',
          },
          shared: ['react', 'react-dom'],
        },
      ]);
    },
  },
});
