import React from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const { id } = useParams()

    const productos = [
        { id: 1, image: "../img/golddisco.jpg", titulo: "Gold Disco Barbie #1445", precio: 39999, category: "barbie" },
        { id: 2, image: "../img/cowboy.jpg", titulo: "Cowboy Ken #1446", precio: 41500, category: "barbie" },
        { id: 3, image: "../img/western.jpg", titulo: "Western Barbie #1447", precio: 46900, category: "barbie" },
        { id: 4, image: "../img/levi.jpg", titulo: "Battle Levi #1169", precio: 29200, category: "attackontitan" },
        { id: 5, image: "../img/kenny.jpg", titulo: "Kenny Ackerman #463", precio: 36990, category: "attackontitan" },
        { id: 6, image: "../img/mulan.jpg", titulo: "Mushu & Cricket #167", precio: 30999, category: "disney" },
        { id: 7, image: "../img/monster.jpg", titulo: "Monster Stitch #1049", precio: 42500, category: "disney" },
        { id: 8, image: "../img/skelleton.jpg", titulo: "Skelleton Stitch #1234", precio: 28700, category: "disney" },
        { id: 9, image: "../img/pegasus.jpg", titulo: "Baby Pegasus #383", precio: 26550, category: "disney" },
        { id: 10, image: "../img/zero.jpg", titulo: "Zero #1384", precio: 36990, category: "disney" }
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.lenght > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject("No se obtuvieron productos")
        }
    })

    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

    const productosFiltrados = productos.filter((producto) => producto.category == id)
    console.log(productosFiltrados)
    
    if (id) {
        return (
            <div>
                <ItemList productos={productosFiltrados} />
            </div>
        )
    } else return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer