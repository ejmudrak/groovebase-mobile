import BinIcon from '@components/Icons/BinIcon';
import CollectionIcon from '@components/Icons/CollectionIcon';
import { colors } from '@utils/styles/colors';
import { Link, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name='records/index'
        options={{
          title: 'Records',
          tabBarIcon: ({ color }) => <CollectionIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='/add-bin/index'
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name='/add-record/search'
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name='/add-record/form'
        options={{
          href: null,
        }}
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
    // bottom: 8,
    // backgroundColor: colors.white[500],
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingVertical: 16,
    // paddingHorizontal: 72,

    // boxShadow: '0px -2px 24px rgba(0, 0, 0, 0.08)', // for browser only
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 24,
    shadowOpacity: 0.08,
  },

  tabBarLabel: {
    fontFamily: 'Barlow_400Regular',
  },
});
