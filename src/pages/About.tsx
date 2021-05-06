import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './About.less';


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <div className={styles.title}>
        About dAbacus
      </div>


      <div className={styles.about}>
        <div className={styles.aboutTitle}>We are ... you</div>
        <div className={styles.aboutBody}>
          A community built by individuals who share the pain of giving their power away to others who claim they can handle their value better than themselves. 
<br/><br/>
It's a community for individuals like Dave, a father of two, energy depleted by the banks toying with his life's assets. Chen, a talented developer, was excited to freelance for the first time, but then he threw the towel when every transfer fee felt like a stab. Carmen, who hasn't voted in the last 20 years because she perceives all parties as holding the same hand, raising her taxes again. A community for those slaved of this modern "democracy" where a centralized few are handling your value. 
<br/><br/>
A community united by a common purpose, a solid demand for change. We are building dAbacus because the world demands more equality, privacy, liberty and independence than ever before
        </div>


        <div className={styles.aboutTitle}>What makes us so different? POS application networks over a POW foundational layer</div>
        <div className={styles.aboutBody}>We don't believe in passivism, and we are all about change; a network of networks using blockchain technology to reach consensus beyond the impossible thanks to our Blocktree ledger structure, a throughput supernet of subnetworks that optimize themselves based on our incentive system. Unlimited, unstoppable.</div>


        <div className={styles.aboutTitle}>dAbacus vision, the world’s accounting machine</div>
        <div className={styles.aboutBody}>Pure decentralization can only happen when we cease depending on fiat money to exchange our value, when it truly becomes ours to handle and share without referring to third parties. 
<br/><br/>
We aim to unify the crypto community by creating The Unit, the first crypto-native unit of account, a community-managed index tied to global population data with the capacity to replace the USD as the World Unit of Account. 
</div>


<div className={styles.aboutTitle}>dAbacus mission, progress leading to freedom</div>
        <div className={styles.aboutBody}>dAbacus’ first objective is to expand the world’s most secure and most intuitive distributed peer-to-peer liquidity and value storage supernet. 
<br/><br/>
At first, dAbacus will use the Ethereum network to bootstrap its development, to unleash the power of the ABA currency, which will revolutionize the way we transfer and store value. Once the supernet expansion is underway, we will provide you with the dAbax wallet making portfolio-to-portfolio payments a reality mediated by The Unit, the first crypto-native unit of account. In this way, dAbacus and its community will become the world’s accounting center for all financial transactions, governed by all of us.</div>



<div className={styles.aboutTitle}>become dAbacus missionary</div>
        <div className={styles.aboutBody}>Sail across the great sea of decentralization, deploying and acting on a message that will change humanity, bringing a proactive transformation we’ve waited far too long for. 
</div>


<div className={styles.aboutTitle}>Community-based Supernet, the blocktree</div>
        <div className={styles.aboutBody}>Capable to scale much faster and cost-effectively than any current communities on the space. dAbacus is a hub for decentralized applications, a net of networks united by a common purpose, a solid demand for change. We are building dAbacus because the work demands more equality, privacy, liberty and independence than ever before
 
</div>



      </div>


    </PageContainer>
  );
};
