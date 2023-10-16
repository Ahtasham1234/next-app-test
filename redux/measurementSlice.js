import { createSlice } from "@reduxjs/toolkit";

const measurementUnitSlice = createSlice({
  name: "measurementUnits",
  initialState: { measurementUnits: [] },
  reducers: {
    getAllMeasurementsUnits(state, action) {
      console.log("action", action);
      state.measurementUnits = ["testing"];
    },
  },
});

export const unitsActions = measurementUnitSlice.actions;

export default measurementUnitSlice;
