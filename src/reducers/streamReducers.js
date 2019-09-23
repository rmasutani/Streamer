import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //Response will be an array of stream objects!
      //Need trailing dots because the array will be huge
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
