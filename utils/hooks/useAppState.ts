// via: https://tanstack.com/query/latest/docs/react/react-native

import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

/*
  Instead of event listeners on window, React Native provides focus information through the AppState module. 
  
  You can use the AppState "change" event to trigger an update when the app state changes to "active":
*/

export function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, [onChange]);
}
