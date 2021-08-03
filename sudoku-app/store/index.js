import { createStore, applyMiddleware } from "redux";
import { BOARD_TABLE, STATIC_TABLE,WINNER_BOARD } from "./actionType";
import thunk from "redux-thunk";

const initialState = {
  tableBoard: [],
  staticTable:[],
  winnerBoard:[]
};

function reducer(state = initialState, action) {
  if (action.type === BOARD_TABLE) {
    return { ...state, tableBoard: action.payload };
  } else if (action.type === STATIC_TABLE) {
    return { ...state, staticTable: action.payload };
  } else if (action.type === WINNER_BOARD) {
    return { ...state, winnerBoard: [...state.winnerBoard,action.payload] };
  } else {
    return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
