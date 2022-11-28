import { ADD_ITEM, DELETE_ITEM } from "/Users/sjamuar/Desktop/muse-meditation/src/redux/actions.js";

const initialState = {
  journalItems: [],
};

const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let id = 1;
      if (state.journalItems.length > 0) {
        id = state.journalItems[0].id + 1;
      }
      let item = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text,
      };
      return {
        ...state,
        journalItems: [item, ...state.journalItems],
      };
    case DELETE_ITEM:
      return {
        ...state,
        journalItems: state.journalItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default journalReducer;
