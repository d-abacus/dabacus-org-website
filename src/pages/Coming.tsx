import React from 'react';
import styles from './Coming.less';


export default (): React.ReactNode => {

  return (
    <div className={styles.comingSoon}>
      <video autoPlay loop muted className={styles.video}>
        <source src="http://www.sample-videos.com/video123/mp4/360/big_buck_bunny_360p_1mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
