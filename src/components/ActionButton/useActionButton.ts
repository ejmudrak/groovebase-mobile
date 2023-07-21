import { useState } from 'react';
import { StackParamsList } from '@src/types';
import { useNavigation } from '@react-navigation/native';

export default function useActionButton() {
  const { navigate } = useNavigation();
  const [isActionsModalOpen, setIsActionsModalOpen] = useState(false);
  const openModal = () => setIsActionsModalOpen(true);
  const closeModal = () => setIsActionsModalOpen(false);

  const handleNavigate = (page: keyof StackParamsList) => {
    closeModal();
    navigate(page as never);
  };

  return { isActionsModalOpen, openModal, closeModal, handleNavigate };
}
