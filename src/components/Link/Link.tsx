import {Text, TouchableOpacity} from 'react-native';
import LinkProps from './types';

export const Link = ({text, onPress}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
