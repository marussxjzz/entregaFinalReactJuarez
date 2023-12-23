import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyItems={'center'}>
        {productos.map((p) => {
            return ( 
                <Item
                    key={p.id}
                    image={p.image}
                    titulo={p.titulo}
                    precio={p.precio}
                    id={p.id}
                />             
            )
        })}
    </Grid>
  )
}

export default ItemList