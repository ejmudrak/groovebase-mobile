/*
  @component UpdateRecordButton
  @description 
*/

import type { UpdateRecordButtonProps } from './UpdateRecordButton';
import Button from '@src/components/Button';

export default function UpdateRecordButton({
  handleSubmit,
  isDirty,
  isValid,
  isRecordQueryLoading,
  updateUserRecord,
  isUpdating,
}: UpdateRecordButtonProps) {
  return (
    <Button
      title='Submit'
      onPress={handleSubmit(updateUserRecord)}
      isLoading={isUpdating}
      disabled={!isDirty || (isDirty && !isValid) || isRecordQueryLoading}
    />
  );
}
