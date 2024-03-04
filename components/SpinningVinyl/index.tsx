import useSpinningVinylProps from './useSpinningVinylProps';
import SpinningVinylView from './SpinningVinyl.view';
import type { BaseSpinningVinylProps } from './SpinningVinyl';

export default function SpinningVinyl(baseProps: BaseSpinningVinylProps) {
  const props = useSpinningVinylProps(baseProps);
  return <SpinningVinylView {...props} />;
}
