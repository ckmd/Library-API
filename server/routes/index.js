import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
    }));
    app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
    app.get('/api/books', Books.list); // API route for user to get all books in the database
    app.put('/api/books/:bookId', Books.modify);
    app.delete('/api/books/:bookId', Books.delete); 
    app.post('/api/users', Users.signUp); // API route for user to signup
};