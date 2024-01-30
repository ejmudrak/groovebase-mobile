import { colors } from 'utils/styles/colors';
import ActionItem from 'components/ActionsModal/components/ActionItem';
import TrashIcon from 'components/Icons/TrashIcon';
import { RemoveBinOptionProps } from './RemoveBinOption';

export default function RemoveBinOption({
  handleRemoveBin,
  isRemovingBin,
}: RemoveBinOptionProps) {
  return (
    <ActionItem
      icon={<TrashIcon color={colors.blue[500]} />}
      label='Remove bin'
      onPress={handleRemoveBin}
      isLoading={isRemovingBin}
    />
  );
}
