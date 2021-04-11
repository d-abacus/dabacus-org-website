import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Affix, Row, Col } from 'antd';
import './Principle.less';
import Scrollspy from 'react-scrollspy';


export default (): React.ReactNode => {

  const [top, setTop] = useState(10);

  return (
    <PageContainer>
      <Row>
        <Col span={5}>
          <Affix offsetTop={top} className="affix-container">
            <Scrollspy items={ ['introduction', 'interstella', 'accounting', 'crypto-native', 'vision', 'technology', 'incentives', 'tentative', 'community'] } currentClassName="is-current">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#interstella">An Interstellar Supernet for Edge Decentralized Applications</a></li>
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
        <Col className="right-col" span={19}>
          <div className="page-title">Welcome to Dabacus</div>
          <div id="introduction" className="page-subtitle">Introduction</div>
          <p className="page-content"><span className="para-initial">B</span>itcoin brought together the mathematical ideas that first allowed us to 
          have peer-to-peer electronic cash (our first open source electronic asset). 
          Since then thousands of instances of this idea have been launched into cyberspace. 
          An important achievement was the launch of Ethereum, the second generation network aiming at 
          generalizing the capabilities of Bitcoin. Dabacus is doing its part by creating the next iteration of 
          a value computing structure: the Blocktree. We are learning from the developments of the crypto 
          industry and we are creating a more complete and modular structure capable of successfully fusing 
          the power of decentralized applications with the value storage capabilities of an immutable ledger.</p>

          <div id="interstella" className="page-subtitle">An Interstellar Supernet for Edge Decentralized Applications</div>
          <div className="more-desc">Our network of networks aims at achieving consensus throughout the Milky Way and beyond thanks to our Blocktree ledger structure and our focus on post-quantum cryptography.</div>
          <p className="page-content"><span className="para-initial">D</span>abacus’ blocktree technology allows the supernet to run both on Mars and on Earth without latency by splitting the mining process. Dabacus is also an unlimited throughput supernet for our financial future. The throughput will grow indefinitely as the network branches into subnetworks. Subnetworks will optimize themselves based on our incentive system.<br/><br/>
We believe that PoW is the best way to anchor a financial platform to the world of atoms and energy and the best way to incentivise current and future peers to join. Nocoiners of our platform can mine with CPUs, GPUs and ASICs getting rewards and coins from holders in the form of fees.<br/><br/>
Edge Decentralized Applications will appear as PoS subnetworks are deployed for different applications. The PoS subnetworks will be anchored in the PoW blocktree giving the best security and scalability features.</p>

          <div id="accounting" className="page-subtitle">The World’s Accounting Machine</div>
          <div className="more-desc">Dabacus community-run technology powers the ABA currency to revolutionize the way we transfer and store value in the post-quantum era.</div>
          <p className="page-content"><span className="para-initial">A</span>t first Dabacus will use the Ethereum network to bootstrap its development. Once Dabacus development is underway we will equip the Dabacus supernet with the Dabax wallet making portfolio to portfolio payments a reality mediated by The Unit, the first crypto-native unit of account. In this way Dabacus will become the world’s accounting center for all financial transactions.</p>

          <div id="crypto-native" className="page-subtitle">A Crypto-Native Unit of Account</div>
          <div className="more-desc">Our comprehensive community managed crypto index tied to global population data aims to replace the USD as the World Unit of Account.</div>
          <p className="page-content"><span className="para-initial">O</span>ur first approach to unifying the crypto community is to create The Unit, an index aiming at becoming the future of accounting and commerce. Creating a meaningful index in crypto is something that we see essential for the future of the industry. We are creating The Unit to both unify the crypto community and to create a meaningful index for the space. We believe we can create the next generation accounting tools and we can do it completely from inside crypto.</p>

          <div id="vision" className="page-subtitle">Dabacus Vision and Mission</div>
          <div className="more-desc">Progress is More Freedom to Create</div>
          <p className="page-content"><span className="para-initial">D</span>abacus’ mission is to be the world’s most secure and most intuitive distributed peer-to-peer liquidity and value storage supernet. We are building Dabacus because the world demands more equality, more privacy, more liberty and independence than ever before. The world demands high quality human/software/hardware architectures that bring permissionless value transfer and storage.<br/><br/>
We are here to support decentralization, to build software that expands our human liberties, and to build a community surrounding these efforts. Dabacus’ value is open and permissionless. An open permissionless finance creates an economy of liberty and prosperity.</p>


          <div id="technology" className="page-subtitle">Dabacus Technology and Resources</div>
          <div className="more-desc">Progress is More Freedom to Create</div>
          <p className="page-content">
            Website: <a href="www.dabacus.org">www.dabacus.org</a><br/><br/>

Intro Document: <a href="www.dabacus.org">www.dabacus.org/NotHereYet.pdf</a><br/><br/>

Resources Document: <a href="www.dabacus.org">www.dabacus.org/NotHereYet.pdf</a><br/><br/>

The Unit Document: <a href="www.dabacus.org">www.dabacus.org/NotHereYet.pdf</a><br/><br/>

Blocktree Document: <a href="www.dabacus.org">www.dabacus.org/NotHereYet.pdf</a><br/><br/>

Webassembly Mining: Early mining will be available in 2022! Get ready to submit hashes to our mining contracts to collect early mining rewards.<br/><br/>

Webassembly Wallet and VM
          </p>

          <div id="incentives" className="page-subtitle">Dabacus Incentives</div>
          <div className="more-desc">We all Need Incentives</div>
          <p className="page-content">Proof of Work: <strong>SHA3-512</strong><br/><br/>

Seed Round: <strong>Dabacus seed round will become available shortly.</strong><br/><br/>
 
Final Round: <strong>The final ABA distribution round will be ongoing on both Uniswap and Sushiswap in 2021.</strong><br/><br/>

Farming of ABA tokens will start in 2021 through our indexed pegged farms.<br/><br/>

Early Mining will start in 2022.</p>



<div id="tentative" className="page-subtitle">Tentative Blocktree Parameters</div>
          <div className="more-desc">The Blocktree is the New Blockchain</div>
          <p className="page-content">
            
Hashing Algorithm: <strong>SHA3-512</strong><br/><br/>

Signature Scheme: <strong>Post-Quantum NIST standard (Expected in 2022)</strong><br/><br/>

Block target time: <strong>120s</strong><br/><br/>

Block reward: <strong>2^12 = 4096 ABA (halves every 2^20 = 1048576 blocks)</strong><br/><br/>

Branch Partitioning: <strong>Initially every 2^18 blocks</strong><br/><br/>

Difficulty Retargeting: <strong>Every 2^12 = 4096 blocks.</strong><br/><br/>

Blocksize: <strong>Linear increase of block size over the length of a branch at a constant rate, then half the block size at the partition block. </strong>

          </p>


          <div id="community" className="page-subtitle">Dabacus Community</div>
          <div className="more-desc">Join Us</div>
          <p className="page-content">
            
Our site: <a target="_blank" href="www.dabacus.org">https://dabacus.org</a><br/><br/>

Twitter: <a target="_blank" href="https://twitter.com/dabacusorg">https://twitter.com/dabacusorg</a><br/><br/>

Discord: <a target="_blank" href="https://discord.com/invite/nSUDXMtS">https://discord.com/invite/nSUDXMtS</a><br/><br/>

Github: <a target="_blank" href="https://github.com/d-abacus">https://github.com/d-abacus</a><br/><br/>

Reddit: <a target="_blank" href="https://www.reddit.com/r/Dabacus/">https://www.reddit.com/r/Dabacus/</a><br/><br/>

Medium: <a target="_blank" href="https://medium.com/@dabacus">https://medium.com/@dabacus</a>
          </p>

        </Col>
      </Row>


    </PageContainer>
  );
};
