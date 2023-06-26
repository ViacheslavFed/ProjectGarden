
import './App.css'
import Header from './Components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './Pages/AllSalesPage/AllSalesPage';
import Footer from './Components/Footer/Footer';
import AllCategoriePage from './Pages/AllCategoriePage/AllCategoriePage';
import CategorieProductsPage from './Pages/CategorieProductsPage/CategorieProductsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductInfoPage from './Pages/ProductInfoPage/ProductInfoPage';
import CartPage from './Pages/CartPage/CartPage';
import { useState } from 'react';
import Modale from './Components/Modale/Modale';

function App() {
  const [active, setActive]=useState(false)
  if(active){
    document.body.style.overflow = "hidden"
  }else {
    document.body.style.overflow = ""
  }
  return (
    <div className='container'>
        <Modale active={active} setActive={setActive}/>
        <Header active={active} setActive={setActive}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products/all' element={<AllProductsPage/>}/>
          <Route path='/sales/all' element={<AllSalesPage/>}/>
          <Route path='/catalog' element={<AllCategoriePage/>}/>
          <Route path='/categories/:id' element={<CategorieProductsPage/>}/>
          <Route path='/products/:id' element={<ProductInfoPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
