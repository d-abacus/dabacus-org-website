import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

const ThemeButton: React.FC = ({ children }) => {
  return (
    <Button type="primary" shape="round" className={styles.button}>
      {children}
    </Button>
  );
};

export default ThemeButton;
