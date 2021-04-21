import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './About.less';


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <div className={styles.title}>
        About
      </div>


      <div className={styles.about}>
        Dabacus is a borderless project serving the world. Dabacus has a scalable blocktree structure 
        and a team dedicated to the mission of the successfully creating a ledger bringing "peer-to-peer 
        electronic cash" for everyone that's fully programable while accessible and light. Our Dabax wallet aims 
        at connecting all ledgers through our asset agregation algorithm, running all  ledger programs 
        (previously called smart contracts) locally.
      </div>


    </PageContainer>
  );
};
