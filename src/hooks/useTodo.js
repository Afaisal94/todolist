import axios from "axios";
import { BaseApiUrl } from "@/utils/BaseApiUrl";
import { getSession } from "next-auth/react";

const getTodos = async () => {
  const session = await getSession();
  const response = await axios.get(`${BaseApiUrl}/todos/${session.user.id}`, {
    headers: { Authorization: `Bearer ${session.user.accessToken}` },
  });
  return response.data;
};

const createTodo = async ({ task }) => {
  const session = await getSession();
  const user_id = session.user.id;
  const response = await axios.post(
    `${BaseApiUrl}/todos`,
    {
      task,
      user_id,
    },
    {
      headers: { Authorization: `Bearer ${session.user.accessToken}` },
    }
  );
  return response.data;
};

const updateTodo = async ({ id, isCompleted }) => {
  const session = await getSession();
  await axios.put(
    `${BaseApiUrl}/todos/${id}`,
    { isCompleted },
    {
      headers: { Authorization: `Bearer ${session.user.accessToken}` },
    }
  );
  return id;
};

const deleteTodo = async ({ id }) => {
  const session = await getSession();
  await axios.delete(`${BaseApiUrl}/todos/${id}`, {
    headers: { Authorization: `Bearer ${session.user.accessToken}` },
  });
  return id;
};

export { getTodos, createTodo, updateTodo, deleteTodo };
