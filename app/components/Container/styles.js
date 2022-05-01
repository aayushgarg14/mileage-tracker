import { Platform, StyleSheet } from 'react-native';
import { StyleConstants } from '../../utils/GenericStyles';

const STATUSBAR_DEFAULT_HEIGHT = 40;

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: StyleConstants.color.$DARK,
  },
  contentTopContainer: {
    flex: 1,
    backgroundColor: StyleConstants.color.$DARK,
    paddingTop: 20,
  },
  statusBarContainer: {
    backgroundColor: StyleConstants.color.$PRIMARY,
    ...Platform.select({
      ios: { height: STATUSBAR_DEFAULT_HEIGHT },
      android: { height: 0 },
    }),
  },
  headerContainer: {
    backgroundColor: StyleConstants.color.$PRIMARY,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
});
