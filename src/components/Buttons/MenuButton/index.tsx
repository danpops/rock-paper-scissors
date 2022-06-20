import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors} from '../../../lib/colors';
import RPSText from '../../RPSText';

interface ButtonProps {
  onPress: () => void;
  title?: string;
  color?: string;
  style?: object;
}

const MenuButton = (props: ButtonProps) => {
  const {onPress, title, style = {}} = props;
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <RPSText heading={0} text={title} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    marginTop: 25,
    width: 120,
    height: 40,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  text: {},
});

export default MenuButton;
