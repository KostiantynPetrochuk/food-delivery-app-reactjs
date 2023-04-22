import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DishT } from "../pages/Category/Category";

export type Custom = {
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

type ChangeCountActionT = {
  _id: string;
  updatedCount: number;
};

type RemoveCustomActionT = {
  _id: string;
};

const customSlice = createSlice({
  name: "customs",
  initialState,
  reducers: {
    addCustom(state, action: PayloadAction<Custom>) {
      if (action !== undefined) {
        state.list.push(action.payload);
      }
    },
    changeCount(state, action: PayloadAction<ChangeCountActionT>) {
      if (action.payload.updatedCount <= 0) {
        state.list = state.list.filter(
          (custom) => custom._id !== action.payload._id
        );
        return;
      }

      const changedCustom = state.list.find(
        (custom) => custom._id === action.payload._id
      );

      if (changedCustom) {
        changedCustom.count = action.payload.updatedCount;
      }
    },
    removeCustom(state, action: PayloadAction<RemoveCustomActionT>) {
      state.list = state.list.filter(
        (custom) => custom._id !== action.payload._id
      );
    },
  },
});

export const { addCustom, changeCount, removeCustom } = customSlice.actions;

export default customSlice.reducer;
