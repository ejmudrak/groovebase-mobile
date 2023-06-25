import { View } from 'react-native';
import RecordCard from '../RecordCard';
import useRecordList from './useRecordList';

export default function RecordList() {
  const { records = [] } = useRecordList();

  return (
    <View>
      {records.map(({ artist, title, year }, index) => (
        <RecordCard key={index} artist={artist} title={title} year={year} />
      ))}
    </View>
  );
}
