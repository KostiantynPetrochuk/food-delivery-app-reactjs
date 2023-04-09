import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DishT } from "../pages/Category/Category";

type Custom = {
  _id: string;
  dish: DishT;
  count: number;
};

type CustomsState = {
  list: Custom[];
};

const initialState: CustomsState = {
  list: [],
};

const customSlice = createSlice({
  name: "customs",
  initialState,
  reducers: {
    addCustom(state, action: PayloadAction<Custom>) {
      //string заміняємо на потрібний тип
      if (action !== undefined) {
        state.list.push(action.payload);
      }
    },
    //---
    // changeCount(state, action: PayloadAction<string>) {
    //   const changedCustom = state.customs.find(
    //     (custom) => custom._id === action.payload
    //   );
    //   changedCustom.completed = !changedCustom.completed;
    // },
    //---
    removeCustom(state, action: PayloadAction<string>) {
      state.list = state.list.filter((custom) => custom._id !== action.payload);
    },
  },
});

export const { addCustom, removeCustom } = customSlice.actions;

export default customSlice.reducer;
