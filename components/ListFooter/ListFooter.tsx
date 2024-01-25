import { StyleSheet, View } from 'react-native';
import Text from '../Text';

export interface ListFooterComponentProps {
  refreshing?: boolean;
  numItems: number;
  Skeleton: ({ style }: { style: any }) => JSX.Element;
}

export default function ListFooter({
  refreshing,
  numItems,
  Skeleton,
}: ListFooterComponentProps) {
  return (
    <View style={styles.container}>
      {refreshing && numItems ? (
        <Skeleton style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }} />
      ) : (
        <Text variant='body4'>{numItems >= 10 ? 'End of list' : ''}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24,
    marginBottom: 50,
  },
});
