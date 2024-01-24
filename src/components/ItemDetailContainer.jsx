import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import Loader from './Loader'

const ItemDetailContainer = () => {
  
    const {id} = useParams()
    
    const [producto, setProducto] = useState([])

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const db = getFirestore();
    
        const oneItem = doc(db, "funkos", `${id}`);
        
        getDoc(oneItem).then((snapshot) => { 
            console.log(snapshot, 'snap')
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProducto(doc)
                setLoading(false)
            }
        })
    }, [])
       
    if (loading === true) {
        return <Loader />
    } else { 
    
    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
        )
     }
}

export default ItemDetailContainer