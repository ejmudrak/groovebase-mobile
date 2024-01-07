import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

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
