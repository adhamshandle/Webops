import { GET_GENERIC, GET_GENERIC_SINGLE } from "../../constants/ActionTypes";

export const getGeneric = (type) => {
  return {
    type: GET_GENERIC,
    payload: { type }
  };
};

export const getGenericSingle = (type, id) => {
  return {
    type: GET_GENERIC_SINGLE,
    payload: { type, id }
  };
};

