import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          },
          Agregar: {
            screens: {
              TabOneScreen: 'agregar',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
