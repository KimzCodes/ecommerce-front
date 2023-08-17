import { createSlice } from "@reduxjs/toolkit";

//types: success/info/warning/alert

const initialState = {
  items: [
    {
      id: 1,
      title: "Notification",
      description: "This is notification description",
      type: "info",
    },
    {
      id: 2,
      title: "Notification",
      description: "This is notification description two",
      type: "alert",
    },
  ],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action) => {},
    removeNotification: (state, action) => {},
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
