import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native-paper';
import '../../locales';
import Tts from 'react-native-tts';

const Home = () => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>Current Language - {currentLanguage}</Text>
      <Text>{t('hello')}</Text>
      <Text>{t('languageSelector')}</Text>
      <Button
        onPress={() => changeLanguage(currentLanguage === 'en' ? 'fr' : 'en')}>
        Change Language
      </Button>
      <Button
        onPress={() => {
          Tts.getInitStatus().then(
            () => {
              console.log('clicked');
              Tts.speak('તું શું કરે છે');
            },
            err => {
              if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
              }
            },
          );
        }}>
        Speak
      </Button>
    </View>
  );
};

export default Home;
