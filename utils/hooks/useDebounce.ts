import { useEffect } from 'react';

/* useDebounce.ts
    Ensures an alotted time has passed before a function is called
    ex) Text input throttling, so that fetches
        don't occur after every character typed
*/

export default function useDebounce(
  effect: () => void,
  deps: any[], // useEffect dependency array
  delay = 275, // in milliseconds
) {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
}
