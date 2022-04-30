import { StyleSheet } from 'react-native';

const StyleConstants = {
  color: {
    $PRIMARY: '#2E2F32',
    $GREY: '#676D70',
    $RED: '#E94638',
  },
  fontSize: {
    $FONT_XXXL: 24,
    $FONT_XXL: 22,
    $FONT_XL: 20,
    $FONT_L: 18,
    $FONT_ML: 16,
    $FONT_M: 14,
    $FONT_SM: 13,
    $FONT_S: 12,
    $FONT_MS: 11,
    $FONT_XS: 10,
    $FONT_XXS: 8,
  },
};

const GenericStyles = StyleSheet.create({
  bold: { fontWeight: '700' },
  mt4: { marginTop: 4 },
  mt16: { marginTop: 16 },
  mb4: { marginBottom: 4 },
  mb16: { marginBottom: 16 },
  ml16: { marginLeft: 16 },
  phMain: { paddingHorizontal: 16 },

  fontS: { fontSize: 12 },
  fontM: { fontSize: 14 },
  fontL: { fontSize: 16 },

  redColor: {
    color: StyleConstants.color.$RED,
  },

  primaryBGColor: {
    backgroundColor: StyleConstants.color.$PRIMARY,
  },

  // Flex
  f1: { flex: 1 },
  fdr: { flexDirection: 'row' },
  jcs: { justifyContent: 'space-between' },

  viewWrap: { width: 0, flexGrow: 1 },
});

export { StyleConstants, GenericStyles };
