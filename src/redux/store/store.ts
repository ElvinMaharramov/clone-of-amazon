import { configureStore } from '@reduxjs/toolkit';

import nextReducer from '../slice/NextSlice';

export const store = configureStore({
  reducer: {
    next:nextReducer,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;