import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
    >
      <Tabs.Screen
        name='records/index'
        options={{
          title: 'Records',
          // tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          // headerRight: () => (
          //   <Link href='/modal' asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name='info-circle'
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name='bins/index'
        options={{
          title: 'Bins',
        }}
      />
    </Tabs>
  );
}
