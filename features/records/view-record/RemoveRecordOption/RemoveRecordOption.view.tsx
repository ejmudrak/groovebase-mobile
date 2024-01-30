import { colors } from 'utils/styles/colors';
import ActionItem from 'components/ActionsModal/components/ActionItem';
import TrashIcon from 'components/Icons/TrashIcon';
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
