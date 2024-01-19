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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import AddBinPage from '@src/pages/AddBin.page';
import AddRecordFormPage from '@src/pages/AddRecordForm.page';
import BinsPage from '@src/pages/Bins.page';
import RecordPage from '@src/pages/Record.page';
import RecordsInBinPage from '@src/pages/RecordsInBin.page';
import Toast from 'react-native-toast-message';
import { AppStateStatus, Platform } from 'react-native';
import { StackParamsList, User } from '@src/types';
import { toastConfig } from '@src/utils/toast-config';
import { useAppState } from '@src/utils/hooks/useAppState';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { useOnlineManager } from '@src/utils/hooks/useOnlineManager';

const Stack = createNativeStackNavigator<StackParamsList>();
const Tab = createBottomTabNavigator();

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

  const CollectionStack = createNativeStackNavigator();

  function CollectionStackScreen() {
    return (
      <CollectionStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <CollectionStack.Screen name='Collection' component={CollectionPage} />
        <CollectionStack.Screen name='Record' component={RecordPage} />
      </CollectionStack.Navigator>
    );
  }

  const BinsStack = createNativeStackNavigator();

  function BinsStackScreen() {
    return (
      <BinsStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <BinsStack.Screen name='Bins' component={BinsPage} />
        <BinsStack.Screen name='RecordsInBin' component={RecordsInBinPage} />
        <BinsStack.Screen name='Record' component={RecordPage} />
      </BinsStack.Navigator>
    );
  }

  const AddDrawer = createBottomTabNavigator();

  function AddDrawerScreen() {
    return (
      <AddDrawer.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        <AddDrawer.Screen
          name='AddRecordSearch'
          component={AddRecordSearchPage}
        />
        <AddDrawer.Screen name='AddRecordForm' component={AddRecordFormPage} />
        <AddDrawer.Screen name='AddBin' component={AddBinPage} />
      </AddDrawer.Navigator>
    );
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
          // TODO: Customize native tab bar instead of using custom one
          tabBarStyle: { display: 'none' },
        }}
      >
        {!user?.id ? (
          <Tab.Screen name='Login' component={LoginPage} />
        ) : (
          <>
            <Tab.Screen name='Collection' component={CollectionStackScreen} />
            <Tab.Screen name='AddRecordSearch' component={AddDrawerScreen} />
            <Tab.Screen name='Bins' component={BinsStackScreen} />
          </>
        )}
      </Tab.Navigator>

      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
