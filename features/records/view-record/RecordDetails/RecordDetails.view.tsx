/*
  @component RecordDetails
  @description 
*/

import { StyleSheet, ScrollView } from 'react-native';
import type { RecordDetailsProps } from './RecordDetails';
import RecordCard from '../../RecordCard';
import EditRecordForm from '../EditRecordForm';

export default function RecordDetails({ record }: RecordDetailsProps) {
  return (
    <ScrollView style={styles.container}>
      <RecordCard record={record} />
      <EditRecordForm record={record} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 8,
  },
});
