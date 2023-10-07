const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  win: [],
  status: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    reset: (state) => {
      state.win = [];
      state.status = [];
    },
    teamCheck: (state, action) => {
      state.status[action.payload.id] = !state.status[action.payload.id];

      if (state.status[action.payload.id]) state.win.push(action.payload);
      else {
        state.win.pop(action.payload);
      }
      // state.win.push(action.payload);
    },
    teamUnCheck: (state) => {
      state.win.shift();
    },
    // teamWinOne: (state, action) => {
    //   state.status[action.payload.id] = !state.status[action.payload.id];

    //   if (state.status[action.payload.id]) state.winOne.push(action.payload);
    //   else {
    //     state.winOne.pop(action.payload);
    //   }
    // },
    // teamWinTwo: (state, action) => {
    //   state.status[action.payload.id] = !state.status[action.payload.id];

    //   if (state.status[action.payload.id]) state.winTwo.push(action.payload);
    //   else {
    //     state.winTwo.pop(action.payload);
    //   }
    // },
  },
});

export default teamSlice.reducer;
export const { reset, teamCheck, teamUnCheck } = teamSlice.actions;
