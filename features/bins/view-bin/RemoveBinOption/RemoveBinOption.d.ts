export interface RemoveBinOptionProps extends PressableProps {
  binId?: string;
  closeModal?: () => void;
  handleRemoveBin: () => void;
  isRemovingBin: boolean;
}

export type BaseRemoveBinOptionProps = Pick<
  RemoveBinOptionProps,
  'binId' | 'closeModal'
>;
