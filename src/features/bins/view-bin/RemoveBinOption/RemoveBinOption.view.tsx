import { colors } from '@src/utils/styles/colors';
import ActionItem from '@src/components/ActionsModal/components/ActionItem';
import TrashIcon from '@src/components/Icons/TrashIcon';
import { RemoveBinOptionProps } from './RemoveBinOption';

export default function RemoveBinOption({
  handleRemoveBin,
  isRemovingBin,
}: RemoveBinOptionProps) {
  return (
    <ActionItem
      icon={<TrashIcon color={colors.blue[500]} />}
      label='Delete bin'
      onPress={handleRemoveBin}
      isLoading={isRemovingBin}
    />
  );
}
