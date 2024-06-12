import { Request, Response, NextFunction } from 'express';
import { createAuthor, deleteAuthor, getAllAuthor, getAuthorById, updateAuthor } from '../services/authorService';

async function createAuthorHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const author = await createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    console.error('error creating author', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function getAllAuthorsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const author = await getAllAuthor();
    res.status(200).json(author);
  } catch (error) {
    console.error('error getting author', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function getAuthorByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const author = await getAuthorById(id);
    res.status(200).json(author);
  } catch (error) {
    console.error('error finding author by id', error);
    res.status(500).json({error:'internal server error'});
  }

}

async function updateAuthorHandler(req: Request, res:Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const author = await updateAuthor(id, updateData);
    res.status(200).json(author);
  } catch (error) {
    console.error('error updating author details', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function deleteAuthorHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const result = await deleteAuthor(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('error deleting author', error);
    res.status(500).json({error:'internal server error'});
  }
}




export { createAuthorHandler, getAllAuthorsHandler, getAuthorByIdHandler, updateAuthorHandler, deleteAuthorHandler };