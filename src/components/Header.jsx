import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../config/Routing.config';

const EHeader = {
  Studio: 'studio',
  Products: 'products',
  Contact: 'contact',
};

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChangePage = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="/images/logo.png"
          alt="RowCut Studio"
          onClick={() => onChangePage(ERoutes.Dashboard)}
        />
      </div>
      <div className="header_navigation">
        <button onClick={() => onChangePage(ERoutes.Dashboard)}>
          {t(EHeader.Studio)}
        </button>
        <button onClick={() => onChangePage(ERoutes.Products)}>
          {t(EHeader.Products)}
        </button>
        <button onClick={() => onChangePage(ERoutes.Contact)}>
          {t(EHeader.Contact)}
        </button>
      </div>
    </div>
  );
};

export default Header;
