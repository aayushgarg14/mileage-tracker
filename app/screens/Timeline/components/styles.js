import { StyleSheet } from 'react-native';
import { GenericStyles } from '../../../utils/GenericStyles';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 100,
  },
  dotContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  item: {
    ...GenericStyles.f1,
    ...GenericStyles.fdr,
    ...GenericStyles.jcs,
    ...GenericStyles.blueBorderColor,
    ...GenericStyles.mt4,
    borderLeftWidth: 2,
    paddingLeft: 20,
    marginLeft: 20,
  },
  itemHeaderContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 50,
  },
  itemHeaderDotContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 11,
    top: -2,
  },
  itemHeader: {
    ...GenericStyles.fdr,
    ...GenericStyles.jcs,
    ...GenericStyles.blueBorderColor,
    flex: 1,
    borderLeftWidth: 2,
    paddingLeft: 20,
    marginLeft: 20,
  },
});

export default styles;
