import { BOARD_TABLE,STATIC_TABLE } from "../actionType";

export function addBoard(input) {
  return {
    type: BOARD_TABLE,
    payload: input,
  };
}

export function staticBoard(input) {
  return {
    type:STATIC_TABLE,
    payload:input
  }
}
export function fetchTable(level) {
  console.log(level);
  return (dispatch) => {
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => (
        dispatch(JSON.parse(JSON.stringify(staticBoard(data.board)))),
        dispatch(JSON.parse(JSON.stringify(addBoard(data.board))))
      ))
      .catch((err) => console.log(err));
  };
}
