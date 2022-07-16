import { useEffect, useState } from "react";
import Author from " ../models/Author ";
import Book from "../models/Book";
import { getBookByIdService, getAllBooksService, addBookService } from "../services/BookService";
const BookData = () => {

  const[bookId, setBookId] = useState();
  const[book, setBook] = useState(new Book());
  const[bookToBeAdded, setBookToBeAdded] = useState(new Book());
  const[author,setAuthor] = useState(new Author());
  const[allBooks,setAllBooks] = useState();



    // let [book, setBook] = useState({});
    // let [bookDataToDisplay, setBookDataToDisplay] = useState({});

    useEffect(() => {
        // setBook({
        //     bookId: '',
        //     bookName: '',
        //     price: ''
        // });
    }, []);

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setBook(evt.target.value ); 
        // setBookDataToDisplay({
        //     bookId: '',
        //     bookName: '',
        //     price: ''
        // });
    }

    // const submitData = (evt) => {
    //     console.log(evt.target.value);
    //     setBookDataToDisplay(book); 
    //     setBook({
    //         bookId: '',
    //         bookName: '',
    //         price: ''
    //     });
    //     evt.preventDefault(); 
    // }
    const submitGetBookById = (evt) => {
        console.log(bookId);
        evt.preventDefault(); 
       // axios.get(`http://localhost:9988/user/get-book-by-id/${id}`);

       getBookByIdService(bookId)
       .then((response) => { 
        console.log(response.data);
       } )
       .catch((error)  => {
        alert(error);
        setBook(response.data);
       })

      
    const submitGetAllBooks = (evt) => {
        evt.preventDefault();
        getAllBooksService()
            .then((response) => {
                setAllBooks(response.data);
                console.log(response.data);
                console.log(allBooks);
            })
            .catch((error) => {
                alert(error);
                setAllBooks([]);
            });
    }
    
    const handleAddBook = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setBookToBeAdded({
            ...bookToBeAdded,
            [e.target.name]: e.target.value
        });

        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });
    }
   
    
    const submitAddBook = (evt) => {
        evt.preventDefault();
        let bookTemp = { ...bookToBeAdded, author };
        addBookService(bookTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Book with bookId ${response.data. bookId} added successfully.`);
            })
            .catch(() => {
                setBookToBeAdded(new Book());
                bookTemp = '';
                alert("Book could not be added.");
            });
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">BookData</p>
                <hr />
                <div className="row py-3">
                    <div className="col-3 md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info" >Please enter the data:</p>
                        <form className="form form-group">
                            <input
                                className="form-control"
                                type="number"
                                id="bookId"
                                name="bookId"
                                value={book.bookId}
                                placeholder="Enter bookid"
                                onChange={handleChange}
                                autoFocus>
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="bookName"
                                name="bookName"
                                value={book.bookName}
                                placeholder="Enter bookname"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="number"
                                id="price"
                                name="price"
                                value={book.price}
                                placeholder="Enter price"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control btn btn-outline-primary"
                                type="submit"
                                value="Submit"
                                onClick={submitData}>
                            </input>
                        </form>
                    </div>
                    <div className="col-3 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Boook data as entered:</p>
                        <hr />
                        <p>BookId: {book.bookId}</p>
                        <p>Name: {book.bookName}</p>
                        <p>Price: {book.price}</p>
                    </div>

                    <div className="col-3 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Book data after submit:</p>
                        <hr />
                        <p>BookId: {bookDataToDisplay.bookId}</p>
                        <p>Name: {bookDataToDisplay.bookName}</p>
                        <p>Price: {bookDataToDisplay.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default BookData;
// const BookData = () => {

//     return(
//         <div>
//             <h1>BookData Component</h1>
//             <p>Welcome...</p>
//         </div>
//     );
// }
// export default BookData;