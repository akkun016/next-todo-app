import { Task } from "@/src/type/types";

export const PostTask =  async (task : Task): Promise<Task> => {
  const response = await fetch("https://vercel-json-server-five.vercel.app/tasks", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const newTask = response.json();
  return newTask;
}

export const DeleteTask =  async (id: string): Promise<Task> => {
  const response = await fetch(`https://vercel-json-server-five.vercel.app/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const DeleteTask = response.json();
  return DeleteTask;
}