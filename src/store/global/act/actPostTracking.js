import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actPostTracking = createAsyncThunk(
  "global/actPostTracking",
  async (error) => {
    try {
      await axios.post("http://localhost:5006/tracking", {
        message: error.message,
        endPoint: error.config.url,
      });
    } catch (error) {}
  }
);
