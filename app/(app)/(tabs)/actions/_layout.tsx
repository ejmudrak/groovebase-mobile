import { Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';
export default function ActionsLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name='index' options={{ presentation: 'modal' }} /> */}
      <Slot />
    </Stack>
  );
}
