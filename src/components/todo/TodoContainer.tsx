import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import FilterTodoDropdownMenu from "./FilterTodoDropdownMenu";
import { useAppSelector } from "@/redux/hooks";
import { useGetTodosQuery } from "@/redux/api/api";

function TodoContainer() {
  // From loca state
  // const { todos } = useAppSelector((state) => state.todo);
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <AddTodoModal />
        <FilterTodoDropdownMenu />
      </div>
      <div className="bg-primary-gradient  w-full h-[500px] rounded-xl p-5 space-y-5">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white flex justify-center items-center rounded-md text-2xl font-bold">
          There is no task pending
        </div> */}
      </div>
    </div>
  );
}

export default TodoContainer;
