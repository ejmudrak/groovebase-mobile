import { useCallback, useState } from 'react';
import { Option } from './SelectInput';

interface Params {
  value: Option[];
  onChange: (newValue: Option[]) => void;
}

export default function ({ value, onChange }: Params) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<Option[]>([]);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = (newSelected: Option[]) => {
    closeModal();

    // update form values
    onChange(newSelected);
  };

  const getFormattedValue = useCallback(
    (value: Option[]) => {
      return value.map((v) => v.label).join(', ');
    },
    [value],
  );

  return {
    closeModal,
    getFormattedValue,
    handleConfirm,
    isModalOpen,
    selected,
    setIsModalOpen,
    setSelected,
  };
}
