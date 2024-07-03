import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { TTodo, removeTodo, toggleCompleted } from "@/redux/features/todoSlice";

function TodoCard({ title, description, id, isCompleted }: TTodo) {
  const dispatch = useAppDispatch();
  const changeCompletionState = () => {
    dispatch(toggleCompleted(id as number));
  };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" name="" id="" onChange={changeCompletionState} />
      <p>{title}</p>
      <p>{description}</p>
      <div>
        {isCompleted ? (
          <p className="text-green-500">Completed</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <div className="space-x-5">
        <Button
          className="bg-red-500"
          onClick={() => dispatch(removeTodo(id as number))}
        >
          <svg
            className="size-5"
            data-slot="icon"
            color="white"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            ></path>
          </svg>
        </Button>
        <Button className="bg-white">
          <svg
            className="size-5"
            color="red"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default TodoCard;
