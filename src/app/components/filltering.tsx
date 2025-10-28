'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { AllData } from '../page'
import { Box, Button, Container, Divider, Drawer, IconButton, Slider, Stack, styled, Typography, useTheme } from '@mui/material'
import ProductClientRender from './ProductClientRender'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
interface FilterState {
    type: 'all' | 'bestSells' | 'category'
    value: string
}



export default function Filtering({ data }: { data: AllData[] | null }) {
    const theme = useTheme()

    const [filter, setFilter] = useState<FilterState>()
    const [open, setOpen] = useState<boolean>(false)
    const [range, setRange] = useState<number[]>([0, 0])

    const prices = useMemo(() => {
        if (!data || data.length === 0) return { min: 0, max: 0 }
        const all = data.map(item => item.price)
        return { min: Math.min(...all), max: Math.max(...all) }
    }, [data])

    useEffect(() => {
        if (prices.min !== prices.max) setRange([prices.min, prices.max])
    }, [prices])

    const FilteredData = useMemo(() => {
        if (!data) return []

        let result = [...data]

        if (filter?.type === "bestSells") {
            result = result.filter(item => item.bestSells === true)
        } else if (filter?.type === "category") {
            result = result.filter(item => item.category === filter.value)
        } else if (filter?.type === 'all') {
            result.filter(item => item)
        }

        result = result.filter((item) => item.price >= range[0] && item.price <= range[1])

        return result

    }, [data, range, filter])
    useEffect(()=>{
        handleOpenDrawer()
    },[filter])

    const handleRangeChange = (_: Event, newValue: number[]) => {
        setRange(newValue)
    }

    const handleOpenDrawer = () => {
        setOpen(!open)
    }

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <Container maxWidth={false} disableGutters >
            <Typography variant='h1' fontSize={50} margin={1}>{filter ? filter.value : "All Product"}</Typography>
            <Box sx={{display:{xs:"flex" , lg:"none"},transform:"translateY(50px)" , justifyContent:"space-between" ,width:70 , alignItems:"center"}}>
                <Typography variant='body2' component={"button"} fontSize={20} paddingLeft={5}>filter</Typography>
                <IconButton onClick={handleOpenDrawer} sx={{}}>
                    <TuneIcon />
                </IconButton>
            </Box>

            <Box display={'flex'} paddingLeft={{ xs: 0, lg: 2 }} gap={5} marginTop={5}  >
                <Stack display={{ xs: "none", lg: "flex" }} direction={'column'} useFlexGap width={{ xs: "30%", lg: "20%" }} position={"relative"} >
                    <Stack gap={2} direction={"column"} width={"100%"} className="sticky top-0 left-0 " >
                        <Typography variant='body1' fontSize={25} margin={1}>Browse by</Typography>
                        <Divider />
                        <Stack direction={"column"} alignItems={"start"}>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: { xs: 12, md: 16, lg: 14 } }} onClick={() => setFilter({ type: "all", value: 'All Product' })}>All Product</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: { xs: 12, md: 16, lg: 14 } }} onClick={() => setFilter({ type: 'bestSells', value: 'bestSells' })}>Best Sells</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: { xs: 12, md: 16, lg: 14 } }} onClick={() => setFilter({ type: 'category', value: "active-qx" })}>Active QX</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: { xs: 12, md: 16, lg: 14 } }} onClick={() => setFilter({ type: "category", value: 'artisanal' })}>Artisanal</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: { xs: 12, md: 16, lg: 14 } }} onClick={() => setFilter({ type: "category", value: "kids" })}>Kids</Button>
                        </Stack>
                        <Typography variant='body1' fontSize={25} margin={1}>Filter by price</Typography>
                        <Divider />
                        <Slider
                            sx={{ color: theme.palette.text.primary, width: "80%", margin: "auto" }}
                            getAriaLabel={() => 'Temperature range'}
                            value={range}
                            onChange={handleRangeChange}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            min={prices.min}
                            max={prices.max}
                        />
                        <Stack direction={"row"} justifyContent={"space-between"} >
                            <Typography variant='body1'>${prices.min}</Typography>
                            <Typography variant='body1'>${prices.max}</Typography>
                        </Stack>
                        <Divider />
                    </Stack>
                </Stack>
                <Drawer
                    sx={{
                        display: { xs: "flex", lg: "none" },
                        // width: "100vw",
                        // height: '100vh',
                        flexShrink: 0,
                        // '& .MuiDrawer-stack': {
                        //     width: "100vw",
                        //     height: "100vh",
                        //     boxSizing: 'border-box',
                        // },
                    }}
                    variant="persistent"
                    anchor="bottom"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleOpenDrawer} >
                             <KeyboardArrowDownIcon />
                        </IconButton>
                    </DrawerHeader>

                    <Stack gap={2} direction={"column"} justifyContent={"start"} width={"100%"}  >
                        <Typography variant='body1' fontSize={25} margin={1}>Browse by</Typography>
                        <Divider />
                        <Stack direction={"column"} alignItems={"start"}>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: 14 }} onClick={() => setFilter({ type: "all", value: 'All Product' })}>All Product</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: 14 }} onClick={() => setFilter({ type: 'bestSells', value: 'bestSells' })}>Best Sells</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: 14 }} onClick={() => setFilter({ type: 'category', value: "active-qx" })}>Active QX</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: 14 }} onClick={() => setFilter({ type: "category", value: 'artisanal' })}>Artisanal</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary, fontSize: 14 }} onClick={() => setFilter({ type: "category", value: "kids" })}>Kids</Button>
                        </Stack>
                        <Typography variant='body1' fontSize={25} margin={1}>Filter by price</Typography>
                        <Divider />
                        <Slider
                            sx={{ color: theme.palette.text.primary, width: "80%", margin: "auto" }}
                            getAriaLabel={() => 'Temperature range'}
                            value={range}
                            onChange={handleRangeChange}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            min={prices.min}
                            max={prices.max}
                        />
                        <Stack direction={"row"} justifyContent={"space-between"} >
                            <Typography variant='body1'>${prices.min}</Typography>
                            <Typography variant='body1'>${prices.max}</Typography>
                        </Stack>
                        <Divider />
                    </Stack>

                </Drawer>
                <Box width={{ xs: "100%", lg: "80%" }}>
                    <ProductClientRender data={FilteredData} />
                </Box>
            </Box>
        </Container>

    )
}
