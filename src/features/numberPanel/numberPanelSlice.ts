import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNumbers } from "../../api/numberPanel.api";

export interface INumberPanelState {
  values: number[];
}

const initialState: INumberPanelState = {
  values: [],
};

export const fetchNumbers = createAsyncThunk(
  'numberPanel/fetchNumbers',
  async () => {
    const response = await getNumbers();
    return response.data
  }
)

export const numberPanelSlice = createSlice({
  name: "numberPanel",
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<number[]>) => {
      state.values = action.payload;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(fetchNumbers.fulfilled, (state, action) => {
      state.values = action.payload;
    })
  }
});

export const { setValues } = numberPanelSlice.actions;
export default numberPanelSlice.reducer;