import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

const Products = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }}>{t('products')}</div>
    </div>
  );
};

export default Products;
