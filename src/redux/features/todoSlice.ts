import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TTodo {
  title: string;
  description: string;
  isCompleted?: boolean;
  id?: number;
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
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
