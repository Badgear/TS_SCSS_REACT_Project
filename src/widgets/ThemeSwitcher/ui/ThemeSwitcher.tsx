import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.Clear}
    >
      {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
