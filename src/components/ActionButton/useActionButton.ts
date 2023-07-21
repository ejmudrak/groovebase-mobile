import { useState } from 'react';

export default function useActionButton() {
  const [isActionsModalOpen, setIsActionsModalOpen] = useState(false);
  const openModal = () => setIsActionsModalOpen(true);
  const closeModal = () => setIsActionsModalOpen(false);

  return { isActionsModalOpen, openModal, closeModal };
}
