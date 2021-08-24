import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './About.less';
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

      <div className={styles.aboutTitle}>The Blocktree, Metaverse’s Next-Level Organism After the Blockchain</div>
      <div className={styles.aboutBody}>dAbacus is building The Blocktree, the Metaverse's next-level organism after the blockchain. The Blocktree can both progressively increase scalability while decreasing latency. It is a supernet of subnetworks that optimize themselves based on a PoW incentive system. Unbounded and uncensorable!</div>
        <br/>
        <div className={styles.aboutBody}>dAbacus continues the work of Satoshi by expanding the structure of the blockchain, enforcing scheduled partitions of the coin set. Developing dAbacus, we use the Rust programming language to increase security and provide provable correctness. dAbacus is building a PoS application networks layer over the PoW foundational blocktree layer. <Link to='/announcements'> Learn more</Link></div>

        <div className={styles.aboutTitle}>dAbacus, The Unit</div>
        <div className={styles.aboutBody}>dAbacus supports a community that aims at disintermediating value away from centralized banks. We are building dAbacus because the world demands more equality, privacy, liberty, and independence than ever before.
</div>
<br/>
        <div className={styles.aboutBody}>dAbacus envisions a future in which we cease to depend on fiat money to exchange value, and value becomes decentralized and disintermediated. For this reason, dAbacus is unifying the crypto community by creating The Unit, the first crypto-native unit of account, a community-managed index tied to global population data with the capacity to become the Metaverse's Unit of Account.

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





<div className={styles.aboutTitle}>dAbacus Mission, Progress in Search of Greater Freedom
</div>
        <div className={styles.aboutBody}>dAbacus is a decentralized hub for distributed applications, a net of networks united by a common purpose, joining all distributed networks while building the next blockchain-type organism. 
        <br/><br/>
        At first, dAbacus will use the Ethereum network to bootstrap its development and unleash the ABA governance token to power The Unit and revolutionizing how we transfer and account value. 
        <br/><br/>
        Once the supernet expansion is underway, we will empower our community with the dAbax wallet enabling cross-network payments mediated by The Unit.
</div>



<div className={styles.aboutTitle}>Become a dAbacus Revolutionary</div>
        <div className={styles.aboutBody}>Sail across the great sea of decentralization, deploying and acting on a message that will change humanity, bringing the proactive transformation we need.
        <Link to='/announcements'> Learn more</Link>
</div>




      </div>


    </PageContainer>
  );
};
