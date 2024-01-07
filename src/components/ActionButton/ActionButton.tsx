import AddPlusIcon from '../Icons/AddPlusIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import useActionButton from './useActionButton';
import IconButton from '@src/components/IconButton';
import { View, StyleSheet } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import ActionsModal from '../ActionsModal';
import ActionItem from '../ActionsModal/components/ActionItem';

export interface ActionButtonProps {}

export default function ActionButton({}: ActionButtonProps) {
  const { handleNavigate } = useActionButton();

  return (
    <ActionsModal title={`What's up?`} OpenModalComponent={AddButton}>
      <ActionItem
        icon={<CollectionIcon color={colors.blue[500]} />}
        label='Add record to collection'
        onPress={() => handleNavigate('AddRecordSearch')}
      />
    </ActionsModal>
  );
}

const AddButton = ({ onPress }: { onPress: () => void }) => (
  <IconButton style={styles.addButton} onPress={onPress}>
    <View style={styles.addIcon}>
      <AddPlusIcon color={colors.white[500]} />
    </View>
  </IconButton>
);

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.blue[500],
    transform: [{ rotate: '45deg' }],
  },
  addIcon: {
    transform: [{ rotate: '-45deg' }],
  },
});
