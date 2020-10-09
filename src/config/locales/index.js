import I18n from 'react-native-i18n';
import en from './en.json';
import vi from './vi.json';

I18n.fallbacks = true;
I18n.locale = 'en';
I18n.translations = {
  en,
  vi,
};

I18n.langs = ['en', 'vi'];

I18n.switchLanguage = (langs) => {
  I18n.locale = langs;
};

export default I18n;
