import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(
        styles.Sidebar,
        {
          [styles.collapsed]: collapsed,
        },
        [className]
      )}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={styles.collapseButton}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
