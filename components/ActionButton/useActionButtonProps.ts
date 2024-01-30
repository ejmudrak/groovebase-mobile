import type { BaseActionButtonProps } from './ActionButton';
import { router } from 'expo-router';

export default function useActionButtonProps({
  ...restOfBaseProps
}: BaseActionButtonProps) {
  return { router, ...restOfBaseProps };
}
