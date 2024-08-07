import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to='/'
          className={styles.mainLink}
          theme={AppLinkTheme.DARK}
        >
          {t('Главная страница')}
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.DARK}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
}
