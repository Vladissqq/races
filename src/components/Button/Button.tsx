import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import ButtonProps from './types';

const Button = ({handlePress, text}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
