'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { AllData } from '../page'
import { Box, Button, Container, Divider, Slider, Stack, Typography, useTheme } from '@mui/material'
import ProductClientRender from './ProductClientRender'

interface FilterState {
    type: 'all' | 'bestSells' | 'category'
    value: string
}



export default function Filtering({ data }: { data: AllData[] | null }) {
    const theme = useTheme()

    const [filter, setFilter] = useState<FilterState>()

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

    const handleRangeChange = (_: Event, newValue: number[]) => {
        setRange(newValue)
    }

    return (
        <Container maxWidth={false} disableGutters >
            <Typography variant='h1' fontSize={50}  margin={1}>{filter ? filter.value : "All Product"}</Typography>
            <Box display={'flex'}  paddingLeft={{xs:1 , lg:2}} gap={5} marginTop={5}>
                <Stack direction={'column'} useFlexGap width={{xs:"30%" ,lg:"20%"}} position={"relative"} >
                    <Stack gap={2} direction={"column"} width={"100%"} className="sticky top-0 left-0 " >
                        <Typography variant='body1' fontSize={25} margin={1}>Browse by</Typography>
                        <Divider />
                        <Stack direction={"column"} alignItems={"start"}>
                            <Button variant='text' sx={{ color: theme.palette.text.primary  , fontSize:{xs:12 , md:16 , lg:14}}} onClick={() => setFilter({ type: "all", value: 'All Product' })}>All Product</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary  , fontSize:{xs:12 , md:16 , lg:14}}} onClick={() => setFilter({ type: 'bestSells', value: 'bestSells' })}>Best Sells</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary  , fontSize:{xs:12 , md:16 , lg:14}}} onClick={() => setFilter({ type: 'category', value: "active-qx" })}>Active QX</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary  , fontSize:{xs:12 , md:16 , lg:14}}} onClick={() => setFilter({ type: "category", value: 'artisanal' })}>Artisanal</Button>
                            <Button variant='text' sx={{ color: theme.palette.text.primary  , fontSize:{xs:12 , md:16 , lg:14}}} onClick={() => setFilter({ type: "category", value: "kids" })}>Kids</Button>
                        </Stack>
                        <Typography variant='body1' fontSize={25} margin={1}>Filter by price</Typography>
                        <Divider />
                        <Slider
                            sx={{ color: theme.palette.text.primary , width:"80%" , margin:"auto" }}
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
                <Box width={{xs:"70",lg:"80%"}}>
                    <ProductClientRender data={FilteredData} />
                </Box>
            </Box>
        </Container>

    )
}
