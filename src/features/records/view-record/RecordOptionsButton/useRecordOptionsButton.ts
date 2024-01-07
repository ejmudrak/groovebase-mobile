import { useState } from 'react';

export default function useRecordOptionsButtonProps() {
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
  const openModal = () => setIsOptionsModalOpen(true);
  const closeModal = () => setIsOptionsModalOpen(false);

  return { isOptionsModalOpen, openModal, closeModal };
}
