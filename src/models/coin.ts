import type { Effect, Reducer } from 'umi';

export type CurrentCoin = {
  id?: string;
  name?: string;
  image?: string;
  currentSupply?: number;
  totalSupply?: number;
  maxSupply?: number;
  rank?: number;
  dominance?: number;
};

export type CoinModelState = {
  currentCoin?: CurrentCoin;
};

export type CoinModelType = {
  namespace: 'coin';
  state: CoinModelState;
  effects: { };
  reducers: {
    saveCurrentCoin: Reducer<CoinModelState>;
  };
};

const CoinModel: CoinModelType = {
  namespace: 'coin',

  state: {
    currentUser: {},
  },

  effects: { },

  reducers: {
    saveCurrentCoin(state, action) {
      return {
        ...state,
        currentCoin: action.payload || {},
      };
    },
  },
};

export default CoinModel;
