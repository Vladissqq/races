import {View, Text} from 'react-native';
import LabelTextProps from './types';
import styles from './styles';

const LabelText = ({label, text}: LabelTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LabelText;
