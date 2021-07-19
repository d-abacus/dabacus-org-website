import Web3Modal from "web3modal";
import Web3 from "web3";


export async function connectProvider(modal: Web3Modal) {
  return modal.connect();
}

export async function getAccounts(web3: Web3) {
  return web3.eth.getAccounts();
}

export async function closeProvider(provider: any) {
  return provider.close();
}

export async function clearProviderCache(modal: Web3Modal) {
  return modal.clearCachedProvider();
}
