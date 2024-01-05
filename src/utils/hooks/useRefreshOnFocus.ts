import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

/*
  In some situations, you may want to refetch the query when a React Native Screen is focused again. 
  
  This custom hook will call the provided refetch function when the screen is focused again.
*/

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      // refetch is skipped the first time because useFocusEffect calls our callback on mount in addition to screen focus.
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch]),
  );
}
