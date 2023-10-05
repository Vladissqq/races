import {View, Text} from 'react-native';
import HeaderProps from './types';
import styles from './styles';

export const Header = ({text}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
