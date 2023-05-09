import { Grid, Box } from '@mui/material'
import prods from '../../products.json'
function Products() {
    return (
        <>
            <div className="grid-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box border={2}>GNZ</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box border={2}>GNZ</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box border={2}>GNZ</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box border={2}>GNZ</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box border={2}>GNZ</Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Products