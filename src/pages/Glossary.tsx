import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './Glossary.less';
import { Row, Col } from 'antd';


const glossaryTitles: Array<String> = [
  "Binary Tree", "Block", "Blocktree", "Blockchain",
  "Branch", "Consensus Algorithm", "Cryptocurrency", "Cryptographic Hash Function",
  "dAbacus", "Decentralized Application", "Deterministic Wallet (HD Wallet)", "Digital Currency",
  "Digital Signature", "Directed Acyclic Graph (DAG)", "Distributed Hash Table (DHT)", "Fork",
  "Graph", "Hash", "Hashing", "Hash Function",
  "Hash Pointer", "Leaf", "Merkle Tree", "Mining",
  "Mnemonic Phrase", "Multi-Signature", "Peer-to-peer Network (P2P)", "P2P Money",
  "Proof-of-Work (PoW)", "Proof-of-Stake (PoS)", "Schnorr Signatures", "Seed",
  "Simplified Payment Verification (SPV)", "Smart Contract", "Tree", "UTXO",
];

const glossaryDescs: Array<String> = [
  "A labeled tree with levels  in which each node has at most two child nodes.", 
  "A set of valid transactions hashed meeting the network required difficulty and added to the chain.",
  "An ordering of data blocks linked by hash pointers and resembling a directed tree.",
  "A total order of data blocks linked by hash pointers in which any block references a previous block down to an original block called the genesis block.",
  "A sequence of blocks strictly between two splitting blocks.",
  "A set of instructions designed to increase agreement and participation in a given P2P network.",
  "money recorded in a cryptographically protected ledger.",
  "A hash function that is non invertible",
  "A set with a binary relation. Objects in the set are usually called nodes or vertices and a relation between two nodes is pictorially represented as an edge connecting two nodes.",
  "An application run by a P2P network as opposed to being run by a trusted third party.",
  "Construction that derives keys from a single seed.",
  "Money recorded digitally.",
  "Digital signature is a synonym of asymmetric cryptography. It is a construction that allows the creation of pairs of public and private keys. The private keys are used for signing messages and the public keys for verifying the authenticity of those messages.",
  "A directed graph without cycles.",
  "A hash lookup table in which the pointers are distributed. In a hash table documents are called values and hashes are called keys. In a distributed hash table the mapping between the values and the keys are distributed.",
  "A copy of a work of open source software which starts its own separate development.",
  " A set with a binary relation. Objects in the set are usually called nodes or vertices and a relation between two nodes is pictorially represented as an edge connecting two nodes.",
  "The output of a hash function for a given natural number.",
  "Calculating a given hash function of a data set (natural number).",
  "A function that maps any natural number to a natural number smaller than a given natural number.",
  "A hash used as a reference to a data set within another data set.",
  "One of the current branches.",
  "A binary tree of hash values. In a Merkle tree a leaf is the hash of a data set and every non leaf node is the hash of its children’s hashes.",
  "The process through which a block is hashed and added to the blockchain.",
  "This is the seed in human readable form.",
  "A digital signature construction that allows multiple peers to sign a message for verification.",
  "A network of equal peers who enforce the rules of a given application. ",
  "Money which needs no trusted third party to function.",
  "The consensus process through which the ledger’s data is protected against attacker aiming at overpowering the P2P network. This process uses outside resources such as silicon and electricity to increase the security of the network.",
  "A process in which the owners of the money in a network can agree about the state of the network.",
  "A signature produced by the Schorr signature construction.",
  "Generator number for keys. In Bitcoin this is usually a 128 bit number.",
  "Verification of transactions without running a full copy of the ledger. ",
  "A program used to move P2P Money.",
  "A graph with no cycles",
  "A representation of an amount of Money in Bitcoin which is ready to be transferred.",
];


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <div className={styles.title}>
        Glossary
      </div>


      <Row className={styles.features}>
        {glossaryTitles.map((row: String, index: Number) => 
          <Col xs={12} sm={12} md={6} className={styles.feature}>
            <div className={styles.featureWrapper}>
              <div className={styles.featureTitle}>{row}</div>
              <div className={styles.featureDesc}>{glossaryDescs[index]}</div>
            </div>
          </Col>
         )}
      </Row>


    </PageContainer>
  );
};
