import * as SplashScreen from 'expo-splash-screen';
import CollectionPage from '@src/pages/Collection.page';
import LoginPage from '@src/pages/Login.page';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Barlow_600SemiBold,
  Barlow_400Regular,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Barlow_700Bold,
    Barlow_600SemiBold,
    Barlow_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName='Collection'>
        <Stack.Screen
          name='Collection'
          component={CollectionPage}
          options={{ title: 'Collection' }}
        />
        <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{ title: 'Log In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
