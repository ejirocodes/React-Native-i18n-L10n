/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {zh, en, es} from './i18n/supportedLanguages';

i18n.fallbacks = true;
i18n.translations = {en, zh, es};
i18n.locale = Localization.locale;

const App: () => Node = () => {
  const onPressLogin = () => {
    Alert.alert(`${i18n.t('signoutBtn')}`, `${i18n.t('signOutAlertMess')}`, [
      {
        text: `${i18n.t('signOutAlertTitle')}`,
        style: 'cancel',
      },
      {
        text: `${i18n.t('confirm')}`,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text>{i18n.t('welcome')}</Text>
      <Button
        onPress={onPressLogin}
        title={i18n.t('signoutBtn')}
        color="#005792"
        accessibilityLabel={i18n.t('signoutBtn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
