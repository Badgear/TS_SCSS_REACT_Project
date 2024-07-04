import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to='/'
          className={styles.mainLink}
          theme={AppLinkTheme.DARK}
        >
          Main
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.DARK}
        >
          About
        </AppLink>
      </div>
    </div>
  );
}
