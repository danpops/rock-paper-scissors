import React from 'react';
import {StyleSheet, View} from 'react-native';
import GameResult from '../../components/GameResult';
import HelperArrow from '../../components/HelperArrow';
import SelectMove from '../../components/SelectMove';
import {useDesign} from '../../hooks';

const Play = () => {
  const {backgroundColor} = useDesign();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <GameResult />
      <HelperArrow />
      <SelectMove />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default Play;
