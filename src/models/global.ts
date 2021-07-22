import type { Reducer } from 'umi';
import Web3 from "web3";

export type GlobalModelState = {
  web3: Web3;
  address: string;
};

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
  };
  reducers: {
    saveWeb3: Reducer<GlobalModelState>;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    web3: null,
    address: null,
  },

  effects: {
  },
  reducers: {
    saveWeb3(state, { payload }): GlobalModelState {
      return {
        ...state,
        ...payload
      };
    },
  },
};

export default GlobalModel;
