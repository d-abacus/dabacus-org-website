import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import styles from './About.less';
import openQuote from '../assets/open-quote.png';
import closeQuote from '../assets/close-quote.png';
import ibaiAvatar from '../assets/Ibai Basabe.png';
import joshAvatar from '../assets/Joshua.png';
import chenAvatar from '../assets/ChEn.png';
import elevenAvatar from '../assets/Eleven.png';
import davidAvatar from '../assets/David.png';
import twitterIcon from '../assets/twitter.png';
import twitterWhiteIcon from '../assets/twitte-white.png';
import twitterGreyIcon from '../assets/twitter-grey.png';


export default (): React.ReactNode => {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleScroll = () => {
    setTimeout(() => setSelectedIndex(-1), 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const teamNames: Array<string> = [
    "Ibai Basabe",
    "Joshua",
    "ChEN",
    "David",
    "Eleven",
  ];

  const teamAvatars: Array<string> = [
    ibaiAvatar, joshAvatar, chenAvatar, davidAvatar, elevenAvatar
  ];

  const teamTitles: Array<string> = [
    "dAbacus Founder",
    "Core Developer",
    "UI / UX Designer",
    "Marketing Director",
    "Branding Manager",
  ];

  const twitterNames: Array<string> = [
    "@IbaiBasabe",
    "@JoshuaJ39520298",
    "@Chen32128291",
    "@DavidCosta2KY",
    "@promise302101",
  ];

  const twitterLinks: Array<string> = [
    "https://twitter.com/IbaiBasabe",
    "https://twitter.com/JoshuaJ39520298",
    "https://twitter.com/Chen32128291",
    "https://twitter.com/promise302101",
    "https://twitter.com/DavidCosta2KY",
  ];

  return (
    <PageContainer>
      <div className={styles.title}>
        About
      </div>


      <div className={styles.about}>
        <div className={styles.topPara}>
        <img className={styles.openQuote} src={openQuote} />
        <img className={styles.closeQuote} src={closeQuote} />
        We are ... you<br/>
        A community built by individuals who share the pain of giving their power away to those who claim they can handle their value better. 
        <br/><br/>
        dAbacus is a community for individuals like Dave, a father of two, energy depleted by the banks toying with his life's assets. Chen, a talented developer, who was excited to freelance for the first time, but then threw the towel when every transfer fee felt like a stab. Carmen, who hasn't voted in the last 20 years because she perceives all parties as holding the same hand, raising her taxes again and again. A community for those slaved of this modern "democracy" where a centralized few are handling our value.
        <br/><br/>
        dAbacus is a community united by a common purpose, a solid demand for change. We are building dAbacus because the world demands more equality, privacy, liberty and independence than ever before.

        
        </div>


        <div className={styles.aboutTitle}>What makes us so different?</div>
        <div className={styles.aboutSubtitle}>The BlockTree, a community-based Supernet specially designed for the Metaverse. POS application networks over a POW foundational layer!</div>
        <div className={styles.aboutBody}>We don't believe in passivism; we are all about change, so we have built a network of networks born in and for the Metaverse, using Satoshi’s blockchain technology to reach consensus beyond the perceived as impossible thanks to our Blocktree ledger structure.<Link to='/announcements'> Learn more</Link></div>

        <div className={styles.aboutTitle}>The Blocktree, world’s next-level Organism after the blockchain</div>
        <div className={styles.aboutBody}>Capable of scaling much faster and cost-effectively than any current community on the space. A throughput supernet of subnetworks that optimize themselves based on our incentive system. Unlimited, unstoppable.
</div>

        <div className={styles.aboutTitle}>dAbacus Vision, the world’s accounting machine</div>
        <div className={styles.aboutBody}>Pure decentralization can only happen when we cease depending on fiat money to exchange our value, when it truly becomes ours to handle and share without referring to third parties.  
        <br/><br/>
        We aim to unify the crypto community by creating The Unit, the first crypto-native unit of account, a community-managed index tied to global population data with the capacity to replace the USD as the World Unit of Account.  
</div>






<div className={styles.aboutTitle}>dAbacus Team</div>
<ul className={styles.team}>
    {teamNames.map((name, index) => 
      <li className={styles.teamWrapper} onClick={() => setSelectedIndex(index)}>
        <img className={styles.teamAvatar} src={teamAvatars[index]} />
        <div className={styles.teamName}>
          {name}
        </div>
        <div className={styles.jobTitle}>
          {teamTitles[index]}
        </div>
        <div className={styles.teamIntro}>
          <a href={twitterLinks[index]} target="_blank">
            <img className={styles.twitterActiveIcon} src={twitterIcon} />
            <img className={styles.twitterIcon} src={twitterGreyIcon} />
            {twitterNames[index]}
          </a>
        </div>
      </li>

    )}
</ul>


<div className={styles.bigTeam + ' ' + styles.team + (selectedIndex > -1 ? (' ' + styles.showBigTeam) : '')} onClick={() => setSelectedIndex(-1)}>
  <div className={styles.teamWrapper}>
    <img className={styles.teamAvatar} src={teamAvatars[selectedIndex]} />
    <div className={styles.teamName}>
      {teamNames[selectedIndex]}
    </div>
    <div className={styles.jobTitle}>
      {teamTitles[selectedIndex]}
    </div>
    <div className={styles.teamIntro}>
      <a href={twitterLinks[selectedIndex]} target="_blank">
        <img className={styles.twitterActiveIcon} src={twitterIcon} />
        <img className={styles.twitterIcon} src={twitterWhiteIcon} />
        {twitterNames[selectedIndex]}
      </a>
    </div>
  </div>
</div>





<div className={styles.aboutTitle}>dAbacus Mission, progress leading to freedom</div>
        <div className={styles.aboutBody}>dAbacus is a hub for decentralized applications, a net of networks united by a common purpose, a solid demand for change. 
        <br/><br/>
        dAbacus’ first objective is to promote and expand the world’s most secure and most intuitive distributed peer-to-peer liquidity and value storage supernet.
        <br/><br/>
        At first, dAbacus will use the Ethereum network to bootstrap its development and unleash the ABA currency’s power, which will revolutionize the way we transfer and store value. Once the supernet expansion is underway, we will empower our community with the dAbax wallet enabling cross-network payments mediated by The Unit, the first crypto-native unit of account. In this way, dAbacus and its community will become the world’s accounting hub to support all decentralized financial transactions governed by all of us.
</div>



<div className={styles.aboutTitle}>Become a dAbacus Missionary</div>
        <div className={styles.aboutBody}>Sail across the great sea of decentralization, deploying and acting on a message that will change humanity, bringing a proactive transformation we’ve waited for far too long. 
        <Link to='/announcements'> Learn more</Link>
</div>




      </div>


    </PageContainer>
  );
};
