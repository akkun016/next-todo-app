import type { NextApiRequest, NextApiResponse } from 'next'
import Task from './types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
  const response  = await fetch("http://localhost:3001/tasks");
  const tasks = await response.json();

  // return res.status(200).json({ tasks });
  return tasks;
}
