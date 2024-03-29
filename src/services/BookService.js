import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:9999/`;

const getBookByIdService = (id) => {
    console.log('getBookByIdService');
    return axios.get(`${springBootAppUrl}book/get-book-by-id/${id}`);
}
const getAllBooksService = () => {
    console.log(`getAllBooksService`);
    return axios.get(`${springBootAppUrl}book/get-all-books`);
}

const addBookService = (book) => {
    console.log(`addBookService`);
    return axios.post(`${springBootAppUrl}book/add-book`, book);
}

// add more functionalities here 

export { getBookByIdService, getAllBooksService, addBookService };