import { Modal, Box, Button } from "@mui/material";

function ModalPaises({ open, setOpen }) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby='Países'
        >
            <Box className='Modal-Box'>
                <Button onClick={() => setOpen(false)}>Cerrar Modal</Button>
            </Box>
        </Modal>
    )
}

export default ModalPaises