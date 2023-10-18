import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }}>{t('contact')}</div>
    </div>
  );
};

export default Contact;
