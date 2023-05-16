import { useEffect, useState } from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import CatchingPokemonSharpIcon from '@mui/icons-material/CatchingPokemonSharp';
import CrudPaises from "./modals/CrudlPaises";

function Menu({ buttonActive, setButtonActive }) {
    useEffect(() => {
        console.log(`botón activo: ${buttonActive}`);
    }, [buttonActive])
    
    return (
        <>
            <Box className='Menu-Box' >
                <Tooltip title='Países'>
                    <IconButton onClick={() => setButtonActive(1)}>
                        <PublicSharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Marcas'>
                    <IconButton onClick={() => setButtonActive(2)}>
                        <CatchingPokemonSharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Categorias'>
                    <IconButton onClick={() => setButtonActive(3)}>
                        <CategorySharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Productos'>
                    <IconButton onClick={() => setButtonActive(4)} >
                        <Inventory2SharpIcon />
                    </IconButton>
                </Tooltip>
            </Box >
            <CrudPaises />
        </>
    )
}

export default Menu