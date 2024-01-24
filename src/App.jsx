import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import CartContext from './context/CartContext'

const App = () => {
  
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Routes>

          <Route exact path='/home' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/cart/order' element={<Form/>}/>

        </Routes>
        <Footer/>
      </CartContext>
    </BrowserRouter>
  )
}

export default App