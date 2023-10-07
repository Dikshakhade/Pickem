import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "../features/team/teamSlice";

const store = configureStore({
  reducer: {
    team: teamSlice,
  },
});

export default store;
