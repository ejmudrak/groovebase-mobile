export interface ActionsModalProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  title: string;
  OpenModalComponent: React.ComponentType<{ onPress: () => void }>;
  children: React.Element;
}

export type BaseActionsModalProps = Pick<
  ActionsModalProps,
  'title' | 'OpenModalComponent' | 'children'
>;
