import { StyleSheet, View } from 'react-native';
import Text from '../Text';

export interface ListFooterComponentProps {
  refreshing?: boolean;
  hasItems: boolean;
  Skeleton: ({ style }: { style: any }) => JSX.Element;
}

export default function ListFooter({
  refreshing,
  hasItems,
  Skeleton,
}: ListFooterComponentProps) {
  return (
    <View style={styles.container}>
      {refreshing && hasItems ? (
        <Skeleton style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }} />
      ) : (
        <Text variant='body4'>{hasItems ? 'End of list' : ''}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 16,
  },
});
