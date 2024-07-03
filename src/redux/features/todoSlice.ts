import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export interface TTodo {
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
    toggleCompleted: (state, action: PayloadAction<number>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});
export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
