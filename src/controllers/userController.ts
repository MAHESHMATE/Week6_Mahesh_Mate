import { Request, Response } from "express";
import { createUser, getUsers, updateUser, deleteUser } from '../services/userService'

export const addUser = async (req: Request, res: Response) => {
  const { id, name, email } = req.body;
  await createUser(req.body);
  res.send("user created successfully")
}


export const getUser = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
}

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUser(req.body);
    res.send(result);
  } catch (err: any) {
    res.status(500).send(`error updating user: ${err.message}`);
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteUser(parseInt(id));
    res.send(result);
  } catch (err: any) {
    res.status(500).send(`error deleting user: ${err.message}`);
  }
};
