import React, { PropsWithChildren } from 'react';
import { Button } from 'antd';
import styles from './index.less';


interface ThemeButtonProps extends PropsWithChildren<any> {
  small: Boolean;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ small = false, children }: ThemeButtonProps) => {
  return (
    <Button type="primary" shape="round" className={styles.button + (small ? 'small' : '')}>
      {children}
    </Button>
  );
};

export default ThemeButton;
