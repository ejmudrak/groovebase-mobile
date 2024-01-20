import React from 'react';
import { useFocusEffect } from 'expo-router';

/*
  In some situations, you may want to refetch the query when a React Native Screen is focused again. 
  
  This custom hook will call the provided refetch function when the screen is focused again.
*/

export default function useRefresh<T>(refetch: () => Promise<T>) {
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );
}
