import { useState } from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import CatchingPokemonSharpIcon from '@mui/icons-material/CatchingPokemonSharp';
import ModalPaises from "./modals/ModalPaises";
function Menu() {
    const [openPaises, setOpenPaises] = useState(false)
    return (
        <>
            <Box className='Menu-Box' >
                <Tooltip title='Países'>
                    <IconButton onClick={() => setOpenPaises(!openPaises)}>
                        <PublicSharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Marcas'>
                    <IconButton>
                        <CatchingPokemonSharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Categorias'>
                    <IconButton>
                        <CategorySharpIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Productos'>
                    <IconButton>
                        <Inventory2SharpIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <ModalPaises open={openPaises} setOpen={setOpenPaises} />
        </>
    )
}

export default Menu