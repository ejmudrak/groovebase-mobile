module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@utils': './utils',
          },
          alias: {
            '@app': './app',
          },
          alias: {
            '@components': './components',
          },
          alias: {
            '@features': './features',
          },
          alias: {
            '@assets': './assets',
          },
        },
      ],
      "module:react-native-dotenv",
      'react-native-reanimated/plugin',
      'expo-router/babel'
    ],
  };
};
