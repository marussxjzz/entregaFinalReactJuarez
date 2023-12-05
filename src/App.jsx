import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a mi tienda!"/>
    <Footer/>
    </>
  )
}

export default App