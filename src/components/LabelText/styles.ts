import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
  },
});

export default styles;
