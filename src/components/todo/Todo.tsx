import React from "react";
import Container from "../ui/Container";
import TodoContainer from "./TodoContainer";

function Todo() {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
      <TodoContainer />
    </Container>
  );
}

export default Todo;
