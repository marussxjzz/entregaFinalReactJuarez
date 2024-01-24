import {React, useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader'
import SpotlightCarousel from "./SpotlightCarousel"
import CategoryCards from "./CategoryCards"
import { Heading } from '@chakra-ui/react'

const ItemListContainer = () => {

    const { id } = useParams()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const db = getFirestore()

        const itemsCollection = collection(db, "funkos")
        
        getDocs(itemsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc)=> doc.data())
            setProductos(docs)
            setLoading(false)
        })

    }, [])

    const productosFiltrados = productos.filter((producto) => producto.category == id)
    
    if (loading === true) {
        return <Loader/>
    } else {
        if (id) {
            return (
                <div style={{marginBottom: 30}}>
                    <ItemList productos={productosFiltrados} />
                </div>
            )
        } else return (
            <div style={{ marginBottom: 30 }}>
                <SpotlightCarousel productos={productos} />
                <CategoryCards />
                <Heading as="h2" size="xl" mb={8} textAlign="center">All Products</Heading>
                <ItemList productos={id ? productosFiltrados : productos} />
            </div>
        );
    }

    
}

export default ItemListContainer