
import './App.css'
import Header from './Components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './Pages/AllSalesPage/AllSalesPage';
import Footer from './Components/Footer/Footer';
import AllCategoriePage from './Pages/AllCategoriePage/AllCategoriePage';
import CategorieProductsPage from './Pages/CategorieProductsPage/CategorieProductsPage';

function App() {
  return (
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products/all' element={<AllProductsPage/>}/>
          <Route path='/sales/all' element={<AllSalesPage/>}/>
          <Route path='/catalog' element={<AllCategoriePage/>}/>
          <Route path='/categories/:id' element={<CategorieProductsPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
