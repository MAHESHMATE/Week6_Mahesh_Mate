import { Book } from '../models/bookModel';

async function createBook(bookData: any) {
  try {
    const book =  await Book.create(bookData);
    return book;
  } catch (error) {
    console.error('error adding book', error);
    throw error;
  }
}

async function getAllBooks() {
  try {
    const book = await Book.findAll();
    return book;
  } catch (error) {
    console.error('error getting all books', error);
    throw error;
  }
}

async function getBookById(id: string) {
  try {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('Book not found');

    return book;
  } catch (error) {
    console.error('error getting book', error);
    throw error;
  }
}

async function updateBook(id: string, bookData: any) {
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('book not found');
    }
    await book.update(bookData);
    return book;
  } catch (error) {
    console.error('error updating book details', error);
    throw error;
  }
}

async function deleteBook(id: string) {
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('book not found');
    }
    await book.destroy();
    return { message: 'book deleted successfully' };
  } catch (error) {
    console.error('error deleting book', error);
    throw error;
  }
}



export { createBook, getAllBooks, getBookById, updateBook, deleteBook };




