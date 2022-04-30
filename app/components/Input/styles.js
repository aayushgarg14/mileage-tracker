import { StyleSheet } from 'react-native';
import { StyleConstants } from '../../utils/GenericStyles';

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    padding: 12,
    borderWidth: 0.5,
    borderColor: StyleConstants.color.$GREY,
  },
  inputContainerError: {
    borderColor: StyleConstants.color.$RED,
  },
  labelContainer: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  labelContainerFocused: {
    backgroundColor: StyleConstants.color.$PRIMARY,
    paddingHorizontal: 5,
    left: 7,
    top: -8,
  },
  label: {
    fontSize: 14,
    color: StyleConstants.color.$GREY,
  },
  labelFocused: {
    fontSize: 11,
  },
  labelError: {
    color: 'red',
  },
  input: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
  },
});

export default styles;
