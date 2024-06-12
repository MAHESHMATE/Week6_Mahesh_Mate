import { Author } from '../models/authorModel';

async function createAuthor(authorData: any) {
  try {
    const author =  await Author.create(authorData);
    return author;
  } catch (error) {
    console.error('error creating author', error);
    throw error;
  }
}

async function getAllAuthor() {
  try {
    const author = await Author.findAll();
    return author;
  } catch (error) {
    console.error('error getting list of author', error);
    throw error;
  }
}

async function getAuthorById(id: string) {
  try {
    const author = await Author.findByPk(id);
    if (!author) throw new Error('author not found');

    return author;
  } catch (error) {
    console.error('error getting author', error);
    throw error;
  }
}

async function updateAuthor(id: string, authorData: any) {
  try {
    const author = await Author.findByPk(id);
    if (!author) {
      throw new Error('author not found');
    }
    await author.update(authorData);
    return author;
  } catch (error) {
    console.error('error updating author details', error);
    throw error;
  }
}

async function deleteAuthor(id: string) {
  try {
    const author = await Author.findByPk(id);
    if (!author) {
      throw new Error('author not found');
    }
    await author.destroy();
    return { message: 'author deleted successfully' };
  } catch (error) {
    console.error('error deleting author', error);
    throw error;
  }
}



export { createAuthor, getAllAuthor, getAuthorById, updateAuthor, deleteAuthor };