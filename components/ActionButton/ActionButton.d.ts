import { Router } from 'expo-router/src/types';

export interface ActionButtonProps {
  router: Router;
}

export type BaseActionButtonProps = Pick<ActionButtonProps>;
