import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis eget magna eget mauris tristique tempus.
        Phasellus fringilla non diam eget accumsan. Aliquam erat volutpat.
        Quisque eget nunc interdum tortor finibus ultrices.
        rna neque, gravida sit amet massa in, ornare sagittis metus. Curabitur tempor et mi at mattis.
      </Modal>
    </div>
  );
};
