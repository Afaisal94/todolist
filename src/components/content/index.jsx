import { AiOutlineCheck, AiOutlineClose, AiFillDelete } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getTodos, updateTodo, deleteTodo } from "../../hooks/useTodo";

export const Content = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const { mutate: deleting } = useMutation({
    mutationFn: async (id) => {
      await deleteTodo({ id });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: updating } = useMutation({
    mutationFn: async ({ id, isCompleted }) => {
      await updateTodo({ id, isCompleted });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const HandleComplete = async (id) => {
    let isCompleted = 1;
    await updating({ id, isCompleted });
  };

  const HandleUncomplete = async (id) => {
    let isCompleted = 0;
    await updating({ id, isCompleted });
  };

  const HandleDelete = async (id) => {
    await deleting(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <ClipLoader
          color="grey"
          loading="true"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (isError) {
    return (
      <center>
        <h3 className="mt-10">Error: {error.message}</h3>
      </center>
    );
  }
  return (
    <div className="content mt-10">
      {todos?.length ? (
        <>
          {todos?.map((item) => (
            <div
              key={item.id}
              className="todo-item grid grid-cols-4 gap-4 mb-3 p-1 rounded-md bg-slate-200"
            >
              <div className="col-span-3 flex justify-center items-center">
                {item.isCompleted == 1 ? <s>{item.task}</s> : item.task}
              </div>
              <div className="col">
                <div className="inline-flex justify-center items-center">
                  {item.isCompleted == 1 ? (
                    <button
                      className="bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-l"
                      title="Is Completed ?"
                      onClick={() => {
                        HandleUncomplete(item.id);
                      }}
                    >
                      <AiOutlineClose />
                    </button>
                  ) : (
                    <button
                      className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded-l"
                      title="Is Completed ?"
                      onClick={() => {
                        HandleComplete(item.id);
                      }}
                    >
                      <AiOutlineCheck />
                    </button>
                  )}

                  <button
                    className="bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                    title="Delete"
                    onClick={() => {
                      HandleDelete(item.id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="todo-item grid grid-cols-4 gap-4 mb-3 p-3 rounded-md bg-slate-200">
          <div className="col-span-4 flex justify-center items-center">
            Add New Task !
          </div>
        </div>
      )}
    </div>
  );
};
