export interface ActionsModalProps {
  OpenModalComponent: React.ComponentType<{ onPress: () => void }>;
  OpenModalComponentProps?: object;
  actionsStyle?: any;
  children: React.Element;
  closeModal: () => void;
  isModalOpen: boolean;
  modalStyle?: any;
  openModal: () => void;
  title: string;
}

export type BaseActionsModalProps = Pick<
  ActionsModalProps,
  'title' | 'OpenModalComponent' | 'children' | 'modalStyle' | 'actionsStyle'
>;
