import WalletConnectProvider from "@walletconnect/web3-provider";


interface Web3Constants {
  networkId: number;
  tokenSwapAddress: string;
}

export const web3Constants: Web3Constants = {
  networkId: 4,
  tokenSwapAddress: '0xfc7439fDEbB54fD2D7E6dEd44E3741765c2a74A5',
}


interface IAssetData {
    symbol: string;
    name: string;
    decimals: string;
    contractAddress: string;
    balance?: string;
  }

interface IChainData {
    name: string;
    short_name: string;
    chain: string;
    network: string;
    chain_id: number;
    network_id: number;
    rpc_url: string;
    native_currency: IAssetData;
  }

export const supportedChains: IChainData[] = [
    {
      name: "Ethereum Mainnet",
      short_name: "eth",
      chain: "ETH",
      network: "mainnet",
      chain_id: 1,
      network_id: 1,
      rpc_url: "https://mainnet.infura.io/v3/f875625f90da43609ae3a92d8de5dbe4",
      native_currency: {
        symbol: "ETH",
        name: "Ethereum",
        decimals: "18",
        contractAddress: "",
        balance: ""
      }
    },
    {
      name: "Ethereum Ropsten",
      short_name: "rop",
      chain: "ETH",
      network: "ropsten",
      chain_id: 3,
      network_id: 3,
      rpc_url: "https://ropsten.infura.io/v3/f875625f90da43609ae3a92d8de5dbe4",
      native_currency: {
        symbol: "ETH",
        name: "Ethereum",
        decimals: "18",
        contractAddress: "",
        balance: ""
      }
    },
    {
      name: "Ethereum Rinkeby",
      short_name: "rin",
      chain: "ETH",
      network: "rinkeby",
      chain_id: 4,
      network_id: 4,
      rpc_url: "https://rinkeby.infura.io/v3/f875625f90da43609ae3a92d8de5dbe4",
      native_currency: {
        symbol: "ETH",
        name: "Ethereum",
        decimals: "18",
        contractAddress: "",
        balance: ""
      }
    },
]

export const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "f875625f90da43609ae3a92d8de5dbe4"
      }
    },
}