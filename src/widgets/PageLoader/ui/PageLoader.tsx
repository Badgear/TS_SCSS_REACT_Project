import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string | null;
}

export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}