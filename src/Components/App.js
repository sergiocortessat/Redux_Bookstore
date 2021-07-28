import BooksList from '../Containers/BooksList';
import BooksForm from '../Containers/BooksForm';
import NavBar from '../Containers/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
