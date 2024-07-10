import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string | null;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className={classNames(styles.ldsEllipsis, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
