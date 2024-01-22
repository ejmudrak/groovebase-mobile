import { Option } from 'components/SelectInput/SelectInput';
import { actionOptions } from '@app/(app)/add-record/ActionInput/useActionInput';
import { conditions } from '@app/(app)/add-record/ConditionInput/useConditionInput';

export const convertActionToSelectOptions = (action?: string): Option[] => {
  if (!action) return [];

  const value = actionOptions.find((option) => option.label === action)?.value;

  return value ? [{ label: action, value }] : [];
};

export const convertBinsToSelectOptions = (bins?: any[]): Option[] => {
  if (!bins) return [];

  return bins.map((bin) => ({ label: bin.name, value: bin.id?.toString() }));
};

export const convertMediaConditionToSelectOptions = (
  mediaCondition?: string,
) => {
  if (!mediaCondition) return [];

  const value = conditions
    .find((c) => `${c.name} (${c.abbreviation})` === mediaCondition)
    ?.id?.toString();

  return value ? [{ label: mediaCondition, value }] : [];
};
