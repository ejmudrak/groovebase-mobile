export const actionOptions = [
  { value: '1', label: 'Picked up a new record', order: 1 },
  { value: '2', label: 'Snagged a recent release', order: 2 },
  { value: '3', label: 'Went crate digging', order: 3 },
  { value: '4', label: 'Scored a used deal', order: 4 },
  { value: '5', label: 'Was graciously gifted', order: 5 },
];

export default function () {
  return { actionOptions };
}
