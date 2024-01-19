import { colors } from '@src/utils/styles/colors';
import { View, StyleSheet } from 'react-native';
import NavigationBarItem from './NavigationBarItem';
import CollectionIcon from '../Icons/CollectionIcon';
import BinIcon from '../Icons/BinIcon';
import { ActionButton } from '../ActionButton';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <NavigationBarItem
        label='Collection'
        IconComponent={CollectionIcon}
        page='Collection'
      />

      <ActionButton />

      <NavigationBarItem label='Bins' IconComponent={BinIcon} page='Bins' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 83,
    position: 'absolute',
    bottom: 8,
    backgroundColor: colors.white[500],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 72,

    boxShadow: '0px -2px 24px rgba(0, 0, 0, 0.08)', // for browser only
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 24,
    shadowOpacity: 0.08,
  },
});
