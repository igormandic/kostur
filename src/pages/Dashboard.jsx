import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

const Dasboard = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = () => {
    // Ovo je samo primer, treba da se prepravi
    // Treba da se napravi i neko pocetno ucitavanje gde ce vuci iz
    // local storage, cookia ili sesije koji je jezik trenutno
    i18n.changeLanguage(i18n.language === 'en' ? 'rs' : 'en');
  };

  return (
    <div className="dashboard">
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <span>{t('dashboard')}</span>
        <button onClick={() => onChangeLanguage()}>change language</button>
      </div>
    </div>
  );
};

export default Dasboard;
