import { useCallback, useEffect, useRef, useState } from 'react';
import { Option } from './SelectInput';

interface Params {
  value: Option[];
  onChange: (newValue: Option[]) => void;
}

export default function useSelectInput({ value, onChange }: Params) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<Option[]>([]);

  // Sets initial value of selected once value is fetched
  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const closeModal = () => setIsModalOpen(false);
  const inputRef = useRef<any>(null);

  const handleConfirm = (newSelected: Option[]) => {
    closeModal();

    // update form values
    onChange(newSelected);
  };

  const getFormattedValue = useCallback(
    (value: Option[]) => {
      if (!value?.length) return '';

      return value.map((v) => v.label).join(', ');
    },
    [value],
  );

  return {
    closeModal,
    getFormattedValue,
    handleConfirm,
    isModalOpen,
    inputRef,
    selected,
    setIsModalOpen,
    setSelected,
  };
}
