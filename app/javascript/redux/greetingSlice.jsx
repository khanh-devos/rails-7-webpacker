import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const URL_MISSIONS = 'http://127.0.0.1:3000/api/v1/messages';

const initialState = {
  isLoading: true,
  message: null,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async (name, thunkApi) => {
    try {
      const res = await axios.get(URL_MISSIONS);
      return res.data;

    } catch (err) {
      return thunkApi.rejectWithValue('something wrong!');
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload.data.message,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});


export default greetingSlice.reducer;
