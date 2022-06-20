import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import useDesign from '../../../hooks/useDesign';
import RPSText from '../../RPSText';

interface PressableProps {
  onPress: () => void;
  title?: string;
  color?: string;
  style?: object;
}

const TextButton = (props: PressableProps) => {
  const {color} = useDesign();
  const {onPress, title, style = {}} = props;
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <RPSText text={title} heading={7} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default TextButton;
