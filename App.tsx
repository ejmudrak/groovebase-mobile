import * as SplashScreen from 'expo-splash-screen';
import CollectionPage from '@src/pages/Collection.page';
import LoginPage from '@src/pages/Login.page';
import AddRecordSearchPage from '@src/pages/AddRecordSearch.page';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Barlow_600SemiBold,
  Barlow_400Regular,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';
import { useAppState } from '@src/utils/hooks/useAppState';
import { useOnlineManager } from '@src/utils/hooks/useOnlineManager';
import { StackParamsList, User } from '@src/types';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import AddRecordFormPage from '@src/pages/AddRecordForm.page';
import RecordPage from '@src/pages/Record.page';
import BinsPage from '@src/pages/Bins.page';
import RecordsInBinPage from '@src/pages/RecordsInBin.page';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@src/utils/toast-config';
import AddBinPage from '@src/pages/AddBin.page';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<StackParamsList>();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavWrapper />
    </QueryClientProvider>
  );
}

const NavWrapper = () => {
  const user = useCurrentUser();
  console.log('current user:', user);
  return <Navigation user={user} />;
};

const Navigation = ({ user }: { user?: User | null }) => {
  let [fontsLoaded] = useFonts({
    Barlow_700Bold,
    Barlow_600SemiBold,
    Barlow_400Regular,
  });

  // react query refetch hooks
  useOnlineManager();
  useAppState(onAppStateChange);

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
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user?.id ? (
          <Stack.Screen name='Login' component={LoginPage} />
        ) : (
          <>
            <Stack.Screen name='Collection' component={CollectionPage} />
            <Stack.Screen name='Record' component={RecordPage} />
            <Stack.Screen name='Bins' component={BinsPage} />
            <Stack.Screen name='RecordsInBin' component={RecordsInBinPage} />
            <Stack.Screen name='AddBin' component={AddBinPage} />
            <Stack.Screen
              name='AddRecordSearch'
              component={AddRecordSearchPage}
            />
            <Stack.Screen name='AddRecordForm' component={AddRecordFormPage} />
          </>
        )}
      </Stack.Navigator>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
