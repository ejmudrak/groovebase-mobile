// via: https://tanstack.com/query/latest/docs/react/react-native
import * as React from 'react';
import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import { Platform } from 'react-native';

export function useOnlineManager() {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
      });
    }
  }, []);
}
