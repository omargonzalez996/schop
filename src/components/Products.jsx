import { Grid, Box } from '@mui/material'
import { prods } from '../../products';
import { useEffect } from 'react'
function Products() {

    useEffect(() => {
        console.log(prods);
    }), []

    return (
        <>
            <Grid container spacing={2} className="grid-container">
                {prods.map((prod) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className='product-container'>
                            <div className='product-info'>
                                <div className='product-title'>
                                    <p>{prod.nombre}</p>
                                </div>
                                <div className='product-desc'>
                                    <p>{prod.descripcion}</p>
                                </div>
                                <div className='product-price'>
                                    <p>{prod.precio}</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Products


