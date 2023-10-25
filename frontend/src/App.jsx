import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import ProductsTable from './pages/tables/ProductsTable';
import Form from './pages/register/Form';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tables' element={<ProductsTable />} />
          <Route path='/register' element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
