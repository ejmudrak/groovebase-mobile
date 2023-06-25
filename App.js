import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/login.page';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Login' component={LoginPage} options={{ title: 'Log In' }}/>
      </Navigator>
    </NavigationContainer>

  );
}
