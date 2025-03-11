import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';


export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
