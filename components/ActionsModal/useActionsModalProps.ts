import { useState } from 'react';
import { BaseActionsModalProps } from './ActionsModal';

export default function useActionsModalProps(baseProps: BaseActionsModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal, ...baseProps };
}
