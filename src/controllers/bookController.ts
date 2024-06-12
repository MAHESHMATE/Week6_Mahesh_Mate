import { Request, Response, NextFunction } from 'express';
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from '../services/bookService';

async function createBookHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const book = await createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error('error creating book', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function getAllBooksHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error('error getting books', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function getBookByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const book = await getBookById(id);
    res.status(200).json(book);
  } catch (error) {
    console.error('error finding book by id', error);
    res.status(500).json({error:'internal server error'});
  }

}

async function updateBookHandler(req: Request, res:Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const book = await updateBook(id, updateData);
    res.status(200).json(book);
  } catch (error) {
    console.error('error updating book details', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function deleteBookHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const result = await deleteBook(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('error deleting book', error);
    res.status(500).json({error:'internal server error'});
  }
}




export { createBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookHandler, deleteBookHandler };



