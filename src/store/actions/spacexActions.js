import axios from "axios";

export const listSpacexLaunches = (params = { limit: 100 }) => {
  return (dispatch, getState) => {
    dispatch({ type: "LOADING", data: { status: true } });
    const data = {
      params,
    };

    const options = {
      headers: { accept: "application/json" },
    };
    axios.get("https://api.spaceXdata.com/v3/launches", data, options).then(
      (res) => {
        if (res.data) {
          dispatch({ type: "LIST_DATA_SUCCESS", data: res.data });
        } else {
          dispatch({ type: "LIST_DATA_ERROR", err: res });
        }
        dispatch({ type: "LOADING", data: { status: false } });
      },
      (err) => {
        dispatch({ type: "LIST_DATA_ERROR", err });
        dispatch({ type: "LOADING", data: { status: false } });
      }
    );
  };
};
