import { configureStore } from '@reduxjs/toolkit';
import greetingSliceReducer from './greetingSlice';


const store = configureStore({
  reducer: {
    greeting: greetingSliceReducer
  },
});

export default store;
