import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import RowProps from './types';

export function Row<T extends Record<string, unknown>>({
  data,
  onPress,
}: RowProps<T>) {
  const entries = Object.entries(data);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {entries.map(([, value], index) => (
        <Text key={index} style={{flex: entries.length}}>
          {typeof value === 'string' ? value : ''}
        </Text>
      ))}
    </TouchableOpacity>
  );
}
