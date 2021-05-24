import type { Effect, Reducer } from 'umi';

export type CurrentCoin = {
  id?: string;
  name?: string;
  image?: string;
  totalSupply?: number;
  maxSupply?: number;
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
