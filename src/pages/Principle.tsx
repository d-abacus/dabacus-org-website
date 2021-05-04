import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Affix, Row, Col } from 'antd';
import './Principle.less';
import Scrollspy from 'react-scrollspy';


export default (): React.ReactNode => {

  const [top, setTop] = useState(110);

  return (
    <PageContainer>
      <Row className="announcements-row">
        <Col xs={0} sm={0} md={5}>
          <Affix offsetTop={top} className="affix-container">
            <Scrollspy items={['introduction', 'interstella', 'accounting', 'crypto-native', 'vision', 'technology', 'incentives', 'tentative', 'community']} currentClassName="is-current">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#interstellar">An Interstellar Supernet for Edge Decentralized Applications</a></li>
              <li><a href="#accounting">The World’s Accounting Machine</a></li>
              <li><a href="#crypto-native">A Crypto-Native Unit of Account</a></li>
              <li><a href="#vision">Dabacus Vision and Mission</a></li>
              <li><a href="#technology">Dabacus Technology and Resources</a></li>
              <li><a href="#incentives">Dabacus Incentives</a></li>
              <li><a href="#tentative">Tentative Blocktree Parameters</a></li>
              <li><a href="#community">Dabacus Community</a></li>
            </Scrollspy>
          </Affix>
        </Col>
        <Col className="right-col" xs={24} sm={24} md={19}>
          <div className="page-title">Welcome to Dabacus</div>
          <div id="introduction" className="page-subtitle">Introduction</div>
          <p className="page-content"><span className="para-initial">B</span>itcoin combined the mathematical ideas that allowed us to have peer-to-peer electronic cash (our first open-source electronic asset). Since then, thousands of instances of this idea have been launched into cyberspace. A significant achievement was the launch of Ethereum, the second generation network aiming at generalizing the capabilities of Bitcoin. dAbacus is doing its part by creating the next iteration of a value computing structure: the Blocktree. We are learning from the developments of the crypto industry, creating a more complete and modular system capable of successfully fusing the power of decentralized applications with the value storage capabilities of an immutable ledger.</p>

          <div id="interstellar" className="page-subtitle">An Interstellar Supernet for Edge Decentralized Applications</div>
          <div className="more-desc">Our network of networks aims at reaching consensus throughout the Milky Way and beyond thanks to our Blocktree ledger structure and our focus on post-quantum cryptography.</div>
          <p className="page-content"><span className="para-initial">d</span>Abacus’ blocktree technology allows the supernet to run on Mars and Earth without latency by splitting the mining process. dAbacus is also an unlimited throughput supernet for our financial future. The throughput will grow indefinitely as the network branches into subnetworks. Subnetworks will optimize themselves based on our incentive system.<br /><br />
            We believe that PoW is the best way to anchor a financial platform to the world of atoms and energy and the best way to incentivize current and future peers to join. Nocoiners of our platform can mine with CPUs, GPUs and ASICs obtaining rewards and coins from holders in the form of fees.<br /><br />
            Edge Decentralized Applications will appear as PoS subnetworks are deployed for different applications. The PoS subnetworks will be anchored in the PoW blocktree providing the best security and scalability features.</p>

          <div id="accounting" className="page-subtitle">The World’s Accounting Machine</div>
          <div className="more-desc">dAbacus community-run technology powers the ABA currency to revolutionize the way we transfer and store value in the post-quantum era.</div>
          <p className="page-content"><span className="para-initial">A</span>t first, dAbacus will use the Ethereum network to bootstrap its development. Once dAbacus expansion is underway, we will equip the dAbacus supernet with the dAbax wallet making portfolio-to-portfolio payments a reality mediated by The Unit, the first crypto-native unit of account. In this way, dAbacus and its community will become the world’s accounting center for all financial transactions, governed by all of us.</p>

          <div id="crypto-native" className="page-subtitle">A Crypto-Native Unit of Account</div>
          <div className="more-desc">Our comprehensive community managed crypto index tied to global population data aims to replace the USD as the World Unit of Account.</div>
          <p className="page-content"><span className="para-initial">O</span>ur first approach to unifying the crypto community is to create The Unit, an index aiming at becoming the future of accounting and commerce. Creating a meaningful index in crypto is something that we see as essential for the industry’s future. By establishing The Unit connects all  the crypto communities while  building an index for the space. We believe we can create the next-generation accounting tools, and we can do it entirely from inside crypto.</p>

          <div id="vision" className="page-subtitle">dAbacus Vision and Mission</div>
          <div className="more-desc">Progress means more freedom to create</div>
          <p className="page-content"><span className="para-initial">d</span>Abacus’ mission is to be the world’s most secure and most intuitive distributed peer-to-peer liquidity and value storage supernet.<br /><br />
            We are building dAbacus because the world demands more equality, privacy, liberty and independence than ever before. The world requests high-quality human/software/hardware architectures able to bring permissionless value transfer and storage.<br /><br />
            We are here to support decentralization, build software that expands our human liberties, and set up a community around those efforts.</p>


          <div id="technology" className="page-subtitle">dAbacus Technology and Resources</div>
          <p className="page-content">
            Website: <a href="www.dAbacus.org">www.dabacus.org</a><br /><br />

            Values Document: <a href="www.dAbacus.org">www.dabacus.org/NotHereYet.pdf</a><br /><br />

            Resources Document: <a href="www.dAbacus.org">www.dabacus.org/NotHereYet.pdf</a><br /><br />

            The Unit Document: <a href="www.dAbacus.org">www.dabacus.org/NotHereYet.pdf</a><br /><br />

            Blocktree Document: <a href="www.dAbacus.org">www.dabacus.org/NotHereYet.pdf</a><br /><br />

            Early mining will be available in 2022!<br /><br />
          </p>

          <div id="incentives" className="page-subtitle">dAbacus Incentives</div>
          <div className="more-desc">We all Need Incentives</div>
          <p className="page-content">Proof of Work: <strong>SHA3-512</strong><br /><br />

            Seed Round: <strong>dAbacus seed round will become available shortly.</strong><br /><br />

            Final Round: <strong>The final ABA distribution round will be ongoing at dAbacus.org as well as at several decentralized exchanges such as Uniswap and Sushiswap in 2021.</strong><br /><br />

            Farming of ABA tokens will start in 2021 through our index pegged farms.<br /><br />

            Early Mining.</p>



          <div id="tentative" className="page-subtitle">Tentative Blocktree Parameters</div>
          <div className="more-desc">The Blocktree is the New Blockchain</div>
          <p className="page-content">

            Hashing Algorithm: <strong>SHA3-512</strong><br /><br />

            Signature Scheme: <strong>Post-Quantum NIST standard (Expected in 2022)</strong><br /><br />

            Block target time: <strong>120s</strong><br /><br />

            Block reward: <strong>2^12 = 4096 ABA (halves every 2^20 = 1048576 blocks)</strong><br /><br />

            Branch Partitioning: <strong>Initially every 2^18 blocks</strong><br /><br />

            Difficulty Retargeting: <strong>Every 2^12 = 4096 blocks.</strong><br /><br />

            Blocksize: <strong>Linear increase of block size over the length of a branch at a constant rate, then half the block size at the partition block. </strong>

          </p>


          <div id="community" className="page-subtitle">dAbacus Community</div>
          <div className="more-desc">Join Us</div>
          <p className="page-content">

            Our site: <a target="_blank" href="www.dabacus.org">https://dAbacus.org</a><br /><br />

            Twitter: <a target="_blank" href="https://twitter.com/dabacusorg">https://twitter.com/dabacusorg</a><br /><br />

            Discord: <a target="_blank" href="https://discord.com/invite/nSUDXMtS">https://discord.com/invite/nSUDXMtS</a><br /><br />

            Github: <a target="_blank" href="https://github.com/d-abacus">https://github.com/d-abacus</a><br /><br />

            Reddit: <a target="_blank" href="https://www.reddit.com/r/Dabacus/">https://www.reddit.com/r/Dabacus/</a><br /><br />

            Medium: <a target="_blank" href="https://medium.com/@dabacus">https://medium.com/@dabacus</a>
          </p>

        </Col>
      </Row>


    </PageContainer>
  );
};
