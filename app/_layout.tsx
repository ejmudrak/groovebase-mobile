import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Barlow_600SemiBold,
  Barlow_400Regular,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { AppStateStatus, Platform } from 'react-native';
import { toastConfig } from '@utils/toast-config';
import { useAppState } from '@utils/hooks/useAppState';
import { useOnlineManager } from '@utils/hooks/useOnlineManager';
import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  let [fontsLoaded, fontsError] = useFonts({
    Barlow_700Bold,
    Barlow_600SemiBold,
    Barlow_400Regular,
  });

  // react query refetch hooks
  useOnlineManager();
  useAppState(onAppStateChange);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}
