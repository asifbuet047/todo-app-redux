import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TTodo {
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface TInitialState {
  todos: TTodo[];
}

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});
export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
