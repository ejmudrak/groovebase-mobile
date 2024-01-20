export interface RemoveBinOptionProps extends PressableProps {
  binId: number;
  closeModal?: () => void;
  handleRemoveBin: () => void;
  isRemovingBin: boolean;
}

export type BaseRemoveBinOptionProps = Pick<
  RemoveBinOptionProps,
  'binId' | 'closeModal'
>;
