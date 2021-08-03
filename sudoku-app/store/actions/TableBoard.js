import { WINNER_BOARD } from "../actionType";

export function winner(input) {
  return {
    type:WINNER_BOARD,
    payload:input
  }
}