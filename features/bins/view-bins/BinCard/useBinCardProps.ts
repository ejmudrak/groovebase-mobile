import { Bin } from 'types';
import type { BaseBinCardProps } from './BinCard';

export default function useBinCardProps({
  ...restOfBaseProps
}: BaseBinCardProps) {
  const { bin } = restOfBaseProps;

  // If there isn't a featured record, we'll omit the first record from the preview records
  // And display the first record as the featured record
  const previewRecords = bin.featuredRecordId
    ? bin.recentlyAddedRecords || []
    : bin.recentlyAddedRecords?.slice(1) || [];

  const featuredRecordImageUrl = getFeaturedRecordImageUrl(bin);

  return {
    featuredRecordImageUrl,
    previewRecords,
    ...restOfBaseProps,
  };
}

const getFeaturedRecordImageUrl = (bin: Bin) => {
  let imageUrl = '';

  if (bin?.featuredRecordId) {
    imageUrl = bin.featuredRecord?.largeImageUrl || '';
  } else if (bin?.recentlyAddedRecords) {
    // Get the last record in the array of recently added records
    imageUrl = bin.recentlyAddedRecords[0]?.largeImageUrl;
  }

  return imageUrl;
};
