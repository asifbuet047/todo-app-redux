import React, { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";

function AddTodoModal() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, description });

    dispatch(
      addTodo({
        title: task,
        description,
      })
    );
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex justify-between font-semibold">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add Your tasks that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                id="task"
                className="col-span-3"
                onBlur={(e: React.FocusEvent) => {
                  setTask(e.target.value as string);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                onBlur={(e: React.FocusEvent) =>
                  setDescription(e.target.value as string)
                }
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Add this task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTodoModal;
