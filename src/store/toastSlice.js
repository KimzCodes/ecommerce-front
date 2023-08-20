import { createSlice, nanoid } from "@reduxjs/toolkit";

// {id, title, description, type}
const initialState = {
  notifications: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action) => {
      const id = nanoid(9);
      const type = action.payload?.type || "primary";
      const title = action.payload?.title || "Notification";
      const delay = 1000;

      state.notifications.push({
        id,
        title,
        type,
        delay,
        ...action.payload,
      });
    },
    removeToast: (state, action) => {
      const id = action.payload;
      state.notifications = state.notifications.filter(
        (toast) => toast.id !== id
      );
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
