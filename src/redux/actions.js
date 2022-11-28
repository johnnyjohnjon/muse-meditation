export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItems = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItems = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
