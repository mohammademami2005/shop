"use"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AllData } from '../page';
import ProductClientRender from './ProductClientRender';
import { IconButton, InputBase, Paper, Stack } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

export default function Search() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, error, isLoading, } = useQuery({
        queryKey: ["allProduct"],
        queryFn: async () => (await axios.get('https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products')).data
    })


    const [filteredData, setFilteredData] = React.useState<AllData[] | null>(null)
    const [input, setInput] = useState('')
    const pathName = usePathname()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value.toLowerCase())

    }

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const filtered = data.filter((item) => {
                if (item.category.toLowerCase().includes(input)) {
                    return item.category.toLowerCase().includes(input)
                }
                return item.name.toLowerCase().includes(input)
            })
            setFilteredData(filtered)
        }

    }, [input])
    useEffect(() => {
        setOpen(false)
    }, [pathName])



    return (
        <section>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={handleOpen}>
                <SearchIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction={"row"} justifyContent={"center"} paddingInline={10} position={"sticky"} top={0} left={0} zIndex={10000000009}>
                        <IconButton type="button" aria-label="close" onClick={() => handleClose()} sx={{position:"absolute" , top:0 , right:0}}>
                            <CloseIcon />
                        </IconButton>
                        <Paper
                            component="form"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: { xs: "fit-content", lg: "60%" },
                                p: "2px 4px",
                                borderRadius: 100
                            }}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                                onInput={handleSearch}
                                autoFocus={true}
                            />
                            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Stack>
                    {input === '' ? (
                        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
                            <Typography variant='h1' textAlign={"center"} fontSize={30}>
                                Search by name or category
                            </Typography>
                        </Stack>
                    ) : filteredData && filteredData.length === 0 ? (
                        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
                            <Typography variant='h1' textAlign={"center"} fontSize={30}>
                                No products found with this name
                            </Typography>
                        </Stack>
                    ) : (
                         <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100%"} paddingLeft={{xs:10 ,lg:0}}>

                             <ProductClientRender data={filteredData} />
                         </Box>
                    )}

                </Box>
            </Modal>
        </section>
    );
}
