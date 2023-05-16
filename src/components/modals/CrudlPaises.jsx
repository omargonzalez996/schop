import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from '@mui/material'
import { useState } from "react";

function CrudPaises() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="crudTabs">
                        <Tab label="LIST" value="1" />
                        <Tab label="ADD" value="2" />
                        <Tab label="UPDATE" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Lista de países</TabPanel>
                <TabPanel value="2">Agregar país</TabPanel>
                <TabPanel value="3">Actualizar país</TabPanel>
            </TabContext>
        </Box>
    )
}

export default CrudPaises