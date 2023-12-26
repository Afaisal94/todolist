import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../../hooks/useTodo";

export const Form = () => {
  const queryClient = useQueryClient();
  const [task, setTask] = useState("");
  const { mutate } = useMutation({
    mutationFn: async () => {
      await createTodo({ task });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate();
    setTask("");
  };
  return (
    <div className="form mt-10 flex justify-center items-center">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
