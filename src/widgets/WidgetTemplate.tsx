import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';

interface TemplateProps {
  className?: string | null;
}

export function WidgetTemplate({ className }: TemplateProps) {
  return <div className={classNames(styles.WidgetTemplate, {}, [className])} />;
}
