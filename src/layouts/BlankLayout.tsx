import React from 'react';
import { Inspector } from 'react-dev-inspector';
import { UseWalletProvider } from 'use-wallet'

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout: React.FC = ({ children }) => {
  return <InspectorWrapper>
  <UseWalletProvider chainId={1}>
  	{children}
  	</UseWalletProvider>
  </InspectorWrapper>;
};

export default Layout;
