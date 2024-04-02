import ActionButton from '@components/ActionButton';
import BinIcon from '@components/Icons/BinIcon';
import CollectionIcon from '@components/Icons/CollectionIcon';
import { TAB_BAR_HEIGHT } from '@utils/constants';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
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
          tabBarIcon: () => <ActionButton />,
        }}
        listeners={() => ({
          tabPress: (e) => {
            // swallows the tab press event, allowing out action button modal to open
            e.preventDefault();
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
      <Tabs.Screen name='add-record' options={{ href: null }} />
      <Tabs.Screen name='add-bin' options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: TAB_BAR_HEIGHT,
    position: 'absolute',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,

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
