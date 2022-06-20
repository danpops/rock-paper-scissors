import {StyleSheet} from 'react-native';
import {colors} from '../../lib/colors';

export const getStyle = (styleNum?: number) => {
  return {
    0: textStyles.basic,
    1: textStyles.h1,
    2: textStyles.h2,
    3: textStyles.h3,
    5: textStyles.h5,
    6: textStyles.h6,
    7: textStyles.small,
  }[styleNum || 0];
};

export const textStyles = StyleSheet.create({
  basic: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
  h1: {
    fontSize: 70,
    fontWeight: '100',
    marginBottom: 20,
    padding: 5,
  },
  h2: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '300',
  },
  h3: {
    fontSize: 24,
    fontWeight: '400',
  },
  h5: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
  },
  h6: {
    fontSize: 30,
    fontWeight: '400',
  },
  small: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
});
