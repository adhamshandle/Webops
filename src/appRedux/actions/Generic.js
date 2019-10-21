import { GET_GENERIC } from "../../constants/ActionTypes";

export const getGeneric = (type) => {
  return {
    type: GET_GENERIC,
    payload: { type }
  };
};

