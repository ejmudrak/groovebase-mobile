/*
  @component UpdateRecordButton
  @description 
*/

import { StyleSheet, View } from 'react-native';
import type { UpdateRecordButtonProps } from './UpdateRecordButton';
import Button from 'components/Button';

export default function UpdateRecordButton({
  handleSubmit,
  isDirty,
  isValid,
  isRecordQueryLoading,
  updateUserRecord,
  isUpdating,
}: UpdateRecordButtonProps) {
  return (
    <View style={styles.container}>
      <Button
        title='Save'
        onPress={handleSubmit(updateUserRecord)}
        isLoading={isUpdating}
        disabled={!isDirty || (isDirty && !isValid) || isRecordQueryLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
