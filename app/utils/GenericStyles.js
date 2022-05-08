import { StyleSheet } from 'react-native';

const StyleConstants = {
  color: {
    $PRIMARY: '#2E2F32',
    $DARK_GREY: '#565656',
    $GREY: '#676D70',
    $DARK: '#202124',
    $GREEN: '#5BC558',
    $RED: '#E94638',
    $BLUE: '#8AB4F8',
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
  mt8: { marginTop: 8 },
  mt16: { marginTop: 16 },
  mb4: { marginBottom: 4 },
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  ml4: { marginLeft: 4 },
  ml16: { marginLeft: 16 },
  mr4: { marginRight: 4 },
  mr8: { marginRight: 8 },
  mr16: { marginRight: 16 },
  phMain: { paddingHorizontal: 16 },

  fontXS: { fontSize: 10 },
  fontS: { fontSize: 12 },
  fontM: { fontSize: 14 },
  fontL: { fontSize: 16 },

  lightColor: {
    color: StyleConstants.color.$GREY,
  },
  redColor: {
    color: StyleConstants.color.$RED,
  },
  blueColor: {
    color: StyleConstants.color.$BLUE,
  },

  primaryBGColor: {
    backgroundColor: StyleConstants.color.$PRIMARY,
  },
  blueBGColor: {
    backgroundColor: StyleConstants.color.$BLUE,
  },
  darkBGColor: {
    backgroundColor: StyleConstants.color.$DARK,
  },

  blueBorderColor: {
    borderColor: StyleConstants.color.$BLUE,
  },

  // Flex
  f1: { flex: 1 },
  fdr: { flexDirection: 'row' },
  aic: { alignItems: 'center' },
  asc: { alignSelf: 'center' },
  jcs: { justifyContent: 'space-between' },
  fc: { justifyContent: 'center', alignItems: 'center' },

  viewWrap: { width: 0, flexGrow: 1 },
});

const CircleStyles = size => {
  return StyleSheet.create({
    circle: { width: size, height: size, borderRadius: size / 2 },
  });
};

const DimensionsStyles = (height, width) => {
  return StyleSheet.create({
    dimensions: { width, height },
    width: { width },
    height: { height },
  });
};

export { StyleConstants, GenericStyles, CircleStyles, DimensionsStyles };
