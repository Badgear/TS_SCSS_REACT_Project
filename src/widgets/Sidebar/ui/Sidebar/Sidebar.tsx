import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.Collapsed]: collapsed }, [
        className,
      ])}
    >
      <button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
      >
        {t('Toggle')}
      </button>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.LangButton} />
      </div>
    </div>
  );
}
