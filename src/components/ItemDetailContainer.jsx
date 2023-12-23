import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
    const {id} = useParams()

    const productos = [
        {id: 1, image: "../img/golddisco.jpg", titulo: "Gold Disco Barbie #1445", descripcion: "descripcion del producto", precio: 39999},
        {id: 2, image: "../img/cowboy.jpg", titulo: "Cowboy Ken #1446", descripcion: "descripcion del producto", precio: 41500},
        {id: 3, image: "../img/western.jpg", titulo: "Western Barbie #1447", descripcion: "descripcion del producto", precio: 46900},
        {id: 4, image: "../img/levi.jpg", titulo: "Battle Levi #1169", descripcion: "descripcion del producto", precio: 29200},
        {id: 5, image: "../img/kenny.jpg", titulo: "Kenny Ackerman #463", descripcion: "descripcion del producto", precio: 36990},
        {id: 6, image: "../img/mulan.jpg", titulo: "Mushu & Cricket #167", descripcion: "descripcion del producto", precio: 30999},
        {id: 7, image: "../img/monster.jpg", titulo: "Monster Stitch #1049", descripcion: "descripcion del producto", precio: 42500},
        {id: 8, image: "../img/skelleton.jpg", titulo: "Skelleton Stitch #1234", descripcion: "descripcion del producto", precio: 28700},
        {id: 9, image: "../img/pegasus.jpg", titulo: "Baby Pegasus #383", descripcion: "descripcion del producto", precio: 26550},
        {id: 10, image: "../img/zero.jpg", titulo: "Zero #1384", descripcion: "descripcion del producto", precio: 36990}
    ]

    const mostrarProductos = new Promise ((resolve, reject) => {
        if (productos.lenght > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject ("No se obtuvieron productos")
        }
    })

    mostrarProductos
        .then ((resultado) => {
            console.log(resultado)
        })
        .catch ((error) => {
            console.log(error)
        })


    const productoFiltrado = productos.find((producto) => producto.id == id)
    
    return (
        <div>
            <ItemDetail
            producto={productoFiltrado}   
            />
        </div>
    )
}

export default ItemDetailContainer