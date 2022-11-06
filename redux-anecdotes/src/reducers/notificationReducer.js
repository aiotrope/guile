import { createSlice, nanoid } from "@reduxjs/toolkit";

//const initialState = { message: "" };

//const messages = []

//const initialState = messages.map(asObject)

const notificationSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    createMessage: {
      reducer: (state, action) => {
        //console.log(action.payload.id)
        state.push({ id: action.payload.id ,message: action.payload.message });
      },
      prepare: (message) => {
        //console.log(type)
        const id = nanoid()
        return { payload: { id, message } };
      },
    },
  },
});

export const selectNotification = (state) => state.notifications;


export const { createMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
