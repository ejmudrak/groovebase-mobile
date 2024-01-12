/*
  @component RecordDetails
  @description 
*/

import { View, StyleSheet } from 'react-native';
import type { RecordDetailsProps } from './RecordDetails';
import RecordCard from '../../RecordCard';
import EditRecordForm from '../EditRecordForm';

export default function RecordDetails({ record }: RecordDetailsProps) {
  return (
    <View style={styles.container}>
      <RecordCard record={record} />
      <EditRecordForm record={record} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
