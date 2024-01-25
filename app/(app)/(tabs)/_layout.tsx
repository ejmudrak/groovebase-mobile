import ActionButton from '@components/ActionButton';
import BinIcon from '@components/Icons/BinIcon';
import CollectionIcon from '@components/Icons/CollectionIcon';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)/records',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
      initialRouteName='records'
    >
      <Tabs.Screen
        name='records/index'
        options={{
          title: 'Collection',
          tabBarIcon: ({ color }) => <CollectionIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='actions'
        /* Pass in a blank component as the base (this never gets shown) */
        options={{
          tabBarShowLabel: false,
          title: '',
          tabBarIcon: ({ color }) => <ActionButton />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log('Pressed FAB tab');
          },
        })}
      />
      <Tabs.Screen
        name='bins/index'
        options={{
          title: 'Bins',
          tabBarIcon: ({ color }) => <BinIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: 83,
    position: 'absolute',

    boxShadow: '0px -2px 24px rgba(0, 0, 0, 0.08)', // for browser only
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 24,
    shadowOpacity: 0.08,
  },

  tabBarLabel: {
    fontFamily: 'Barlow_400Regular',
  },
});
