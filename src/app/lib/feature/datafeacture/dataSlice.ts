import { createSlice } from "@reduxjs/toolkit";

interface VariableState {
  domainName:string;
}

const initialState: VariableState = {
  domainName:"algoTate."
};

const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    // setValue(state, action) {
    //   state.value = action.payload;
    // },

  },
});

export const { } = variableSlice.actions;
export default variableSlice.reducer;