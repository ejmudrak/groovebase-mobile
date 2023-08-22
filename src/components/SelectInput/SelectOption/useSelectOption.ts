import { useMemo } from 'react';
import { Option } from '../SelectInput';
import { SelectOptionProps } from '.';
interface Params extends SelectOptionProps {}

export default function ({
  selected,
  multiple,
  option,
  setSelected,
  handleConfirm,
}: Params) {
  const isSelected = useMemo(
    () => Boolean(selected.find((s) => s.value === option.value)),
    [selected, option.value],
  );

  const handleOptionPress = () => {
    if (multiple) {
      // add or remove from selected options
      if (!isSelected) {
        setSelected((prevSelected) => prevSelected.concat([option]));
      } else {
        setSelected((prevSelected) =>
          prevSelected.filter((ps) => ps.value !== option.value),
        );
      }
    } else {
      if (isSelected) {
        // clear the selected options and close the modal
        const newSelected: Option[] = [];
        setSelected(newSelected);
        handleConfirm(newSelected);
      } else {
        // set this option as the only selected option and close the modal
        const newSelected = [option];
        setSelected(newSelected);
        handleConfirm(newSelected);
      }
    }
  };

  return {
    isSelected,
    handleOptionPress,
  };
}
