import { addBoard } from "./AddBoard";

export function validateData(input) {
  const encodeBoard = (board) =>
    board.reduce(
      (result, row, i) =>
        result +
        `%5B${encodeURIComponent(row)}%5D${
          i === board.length - 1 ? "" : "%2C"
        }`,
      ""
    );

  const encodeParams = (params) =>
    Object.keys(params)
      .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
      .join("&");
  return (dispatch) => {
    return fetch("https://sugoku.herokuapp.com/validate", {
      method: "POST",
      body: encodeParams(input),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((response) => {return response.status})
      .catch(console.warn);
  };
}
export function solveData(input) {
  const encodeBoard = (board) =>
    board.reduce(
      (result, row, i) =>
        result +
        `%5B${encodeURIComponent(row)}%5D${
          i === board.length - 1 ? "" : "%2C"
        }`,
      ""
    );

  const encodeParams = (params) =>
    Object.keys(params)
      .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
      .join("&");
  return (dispatch) => {
    fetch("https://sugoku.herokuapp.com/solve", {
      method: "POST",
      body: encodeParams(input),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then(
        (response) => {
          console.log(response);
          if (response.status === "solved"){
            dispatch(addBoard(response.solution))
          }
        }
      )
      .catch(console.warn);
  };
}
