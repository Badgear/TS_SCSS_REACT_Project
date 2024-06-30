import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to={'/'} className={styles.mainLink} theme={AppLinkTheme.DARK}>
          Main
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.DARK}>
          About
        </AppLink>
      </div>
    </div>
  );
};
