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
            <Scrollspy items={['introduction', 'vision', 'crypto-native', 'blocktree', 'accounting', 'technology', 'incentives', 'parameters', 'community']} currentClassName="is-current">
              <li><a href="#introduction">Welcome to dAbacus</a></li>
              <li><a href="#vision">dAbacus Vision and Mission</a></li>
              <li><a href="#crypto-native">A Crypto-Native Unit of Account</a></li>
              <li><a href="#blocktree">The BlockTree, a Supernet for Edge Decentralized Applications</a></li>
              <li><a href="#accounting">The World’s Accounting Hub</a></li>
              <li><a href="#technology">dAbacus Technology and Resources</a></li>
              <li><a href="#incentives">dAbacus Incentives</a></li>
              <li><a href="#parameters">Tentative Blocktree Parameters</a></li>
              <li><a href="#community">dAbacus Community</a></li>
            </Scrollspy>
          </Affix>
        </Col>
        <Col className="right-col" xs={24} sm={24} md={19}>
          <div id="introduction" className="page-title">Welcome to dAbacus</div>
          <p className="page-content"><span className="para-initial">B</span>itcoin combined the mathematical ideas that allowed us to have peer-to-peer electronic cash (our first open-source electronic asset). Since then, thousands of instances of this idea have launched into cyberspace. A significant achievement was the launch of Ethereum, the second-generation network aiming at generalizing the capabilities of Bitcoin. dAbacus is doing its part by creating the next-level organism after the Blockchain: the BlockTree. We are learning from the developments of the crypto industry, creating a more complete and modular system capable of successfully fusing the power of decentralized applications with the value storage capabilities of an immutable ledger.</p>

          <div id="vision" className="page-subtitle">dAbacus Vision and Mission</div>
          <div className="more-desc">Human freedom is the leading cause of progress.</div>
          <p className="page-content"><span className="para-initial">d</span>dAbacus' mission is to become the world's next-generation distributed peer-to-peer liquidity and value storage organism after the Blockchain.<br /><br />
          We are building dAbacus because the world demands more equality, privacy, liberty, and independence than ever before. The world requests high-quality human/software/hardware architectures able to bring permissionless value transfer and storage.<br /><br />
          We are here to support decentralization, build software that expands our human liberties, and set up a community around those efforts. How are we going to achieve it? We have an ambitious yet unique approach, capable of growing organically by uniting everyone in the Metaverse through the most desired right, the right to equality.</p>

          <div id="crypto-native" className="page-subtitle">The Unit, A Crypto-Native Unit of Account</div>
          <div className="more-desc">Our comprehensive community-managed crypto index tied to global population data aims to become the unit of account of the Metarverse.</div>
          <p className="page-content"><span className="para-initial">O</span>ur first approach to unify the crypto community is to deploy The Unit, the first crypto-native index for all cryptocurrencies capable of becoming the future of accounting and commerce, connecting all the crypto communities in the space. We believe we will create the next-generation accounting tools, and we will do it entirely from inside crypto.</p>


          <div id="blocktree" className="page-subtitle">The BlockTree, a Supernet for Edge Decentralized Applications</div>
          <div className="more-desc">A modular ledger structure aimed at reaching consensus throughout the whole Metaverse thanks to its parallelization and localization natures and our focus on post-quantum cryptography.</div>
          <p className="page-content"><span className="para-initial">d</span>Abacus' blocktree technology is designed for the Metaverse, running without latency by splitting the mining process. dAbacus is also an unlimited throughput supernet for our financial future. The throughput will grow indefinitely as the network branches into subnetworks. Subnetworks will optimize themselves based on our incentive system.<br /><br />
          We believe that PoW is the best way to anchor a financial platform to the world of atoms and energy and the best way to incentivize current and future peers to join. Nocoiners of our platform can mine with CPUs, GPUs, and ASICs, obtaining rewards and coins from holders in the form of fees.<br /><br />
          Edge Decentralized Applications will appear as PoS subnetworks deployed for different applications. The PoS subnetworks will be anchored in the PoW blocktree, providing the best security and scalability features.</p>

          <div id="accounting" className="page-subtitle">The World’s Accounting Hub</div>
          <div className="more-desc">dAbacus technology empowers the ABA currency to revolutionize how we transfer and store value in the post-quantum era.</p>
          <p className="page-content"><span className="para-initial">A</span>t first, dAbacus will use the Ethereum network to bootstrap its development. Once the supernet expansion is underway, we will provide our community with the dAbax wallet, enabling cross-network payments mediated by The Unit, the first crypto-native unit of account. In this way, dAbacus and its community will become the world's accounting hub to support decentralized financial transactions governed by all of us.</p>



          <div id="technology" className="page-subtitle">dAbacus Technology and Resources</div>
          <p className="page-content">
            Website: <a href="www.dAbacus.org">www.dabacus.org</a><br /><br />

            Community Values Document: <a href="www.dAbacus.org">www.dabacus.org/community_values.pdf</a><br /><br />

            Resources Document: <a href="www.dAbacus.org">www.dabacus.org/resources.pdf</a><br /><br />

            The Unit Document: <a href="www.dAbacus.org">www.dabacus.org/the_unit.pdf</a><br /><br />

            Blocktree Document: <a href="www.dAbacus.org">www.dabacus.org/blocktree.pdf</a><br /><br />
          </p>

          <div id="incentives" className="page-subtitle">dAbacus Incentives</div>
          <div className="more-desc">We all Need Incentives</div>
          <p className="page-content">Proof of Work: <strong>SHA3-512</strong><br /><br />

            Seed Round: <strong>dAbacus seed round will become available shortly.</strong><br /><br />

            Final Round: <strong>The final ABA distribution round will be ongoing at dAbacus.org as well as at several decentralized exchanges such as Uniswap and Sushiswap in 2021.</strong><br /><br />

            Farming of ABA tokens will start in 2021 through our index pegged farms.<br /><br />
            
            </p>



          <div id="parameters" className="page-subtitle">Tentative Blocktree Parameters</div>
          <div className="more-desc">The Blocktree is the Next Blockchain</div>
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

            Twitter: <a target="_blank" href="https://twitter.com/dABACUS_org">https://twitter.com/dabacus_org</a><br /><br />

            Discord: <a target="_blank" href="https://discord.gg/ePdsHkw3GD">https://discord.gg/ePdsHkw3GD</a><br /><br />

            Github: <a target="_blank" href="https://github.com/d-abacus">https://github.com/d-abacus</a><br /><br />

            Reddit: <a target="_blank" href="https://www.reddit.com/r/dAbacus_community/">https://www.reddit.com/r/dAbacus_community/</a><br /><br />

            Medium: <a target="_blank" href="https://medium.com/@dabacus">https://medium.com/@dabacus</a>
          </p>

        </Col>
      </Row>


    </PageContainer>
  );
};
