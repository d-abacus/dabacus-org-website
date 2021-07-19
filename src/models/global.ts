import type { Reducer, Effect } from 'umi';
import type { ConnectState } from './connect.d';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { providerOptions } from "../utils/web3Utils";
import { 
  connectProvider, 
  getAccounts, 
  closeProvider, 
  clearProviderCache 
} from "../services/web3";

export type GlobalModelState = {
  web3: Web3;
  showWalletModal: boolean;
  web3Modal: Web3Modal;
  address: string;
};

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    setupWeb3: Effect;
    changeWeb3: Effect;
  };
  reducers: {
    setShowWalletModal: Reducer<GlobalModelState>;
    saveWeb3: Reducer<GlobalModelState>;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    showWalletModal: false,
    web3: null,
    address: null,
    web3Modal: new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
      providerOptions: providerOptions
    }),
  },

  effects: {
    *setupWeb3(_, { call, put, select }) {
      const modal: Web3Modal = yield select((state: ConnectState) => state.global.web3Modal);
      try {
        const provider = yield call(connectProvider, modal);
        const web3: any = new Web3(provider);
        const accounts = yield call(getAccounts, web3);
        const address = accounts[0];

        yield put({
          type: 'saveWeb3',
          payload: { web3, address },
        });
      } catch (e) {
        console.log(e);
      }
    },
    *changeWeb3(_, { call, put, select }) {
      const web3: Web3 = yield select((state: ConnectState) => state.global.web3);
      const web3Modal: Web3Modal = yield select((state: ConnectState) => state.global.web3Modal);
      try {
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
          yield call(closeProvider, web3.currentProvider);
        }
        yield call(clearProviderCache, web3Modal);
        yield put({
          type: 'saveWeb3',
          payload: { 
            web3: null, 
            address:null, 
          },
        });

        const provider = yield call(connectProvider, web3Modal);
        const webThree: any = new Web3(provider);
        const accounts = yield call(getAccounts, web3);
        const address = accounts[0];

        yield put({
          type: 'saveWeb3',
          payload: { web3: webThree, address },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    saveWeb3(state, { payload }): GlobalModelState {
      return {
        ...state,
        web3: payload.web3,
        address: payload.address
      };
    },
    setShowWalletModal(state, { payload }): GlobalModelState {
      return {
        ...state,
        showWalletModal: payload,
      };
    },
  },
};

export default GlobalModel;
