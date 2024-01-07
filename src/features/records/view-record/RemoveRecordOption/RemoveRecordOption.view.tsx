import { colors } from '@src/utils/styles/colors';
import ActionItem from '@src/components/ActionsModal/components/ActionItem';
import TrashIcon from '@src/components/Icons/TrashIcon';
import { RemoveRecordOptionProps } from './RemoveRecordOption';

export default function RemoveRecordOption({
  handleRemoveRecord,
  isRemovingRecord,
}: RemoveRecordOptionProps) {
  return (
    <ActionItem
      icon={<TrashIcon color={colors.blue[500]} />}
      label='Remove record from collection'
      onPress={handleRemoveRecord}
      isLoading={isRemovingRecord}
    />
  );
}
