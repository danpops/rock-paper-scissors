import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MenuButton, TextButton} from '../../components/Buttons';
import RPSText from '../../components/RPSText';
import {textStyles} from '../../components/RPSText/styles';
import {useDesign, useUsername} from '../../hooks';
import {AppTitles} from '../../lib/titles';

const MAX_USERNAME_LENGTH = 10;

const Options: React.FC = () => {
  const {backgroundColor, colorOptions, color, t, toggleCaps} = useDesign();
  const {onChangeUser, onSubmitUser, user} = useUsername();

  const title = t(AppTitles.OPTIONS_TITLE);
  const capsTitle = t(AppTitles.CAPS_TITLE);
  const usernameTitle = t(AppTitles.USERNAME_PLACEHOLDER);

  const onPressCaps = () => toggleCaps();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <RPSText text={title} heading={1} color={color} />
      <TextInput
        style={[textStyles.h5, styles.text, {color}]}
        value={t(user)}
        onChangeText={onChangeUser}
        onSubmitEditing={onSubmitUser}
        maxLength={MAX_USERNAME_LENGTH}
        placeholder={usernameTitle}
      />
      <View style={styles.row}>
        {colorOptions.map((button, index) => (
          <MenuButton
            key={index}
            title={button.title}
            onPress={button.dispatchColor}
            style={styles.button}
          />
        ))}
      </View>
      <TextButton title={capsTitle} onPress={onPressCaps} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Options;
