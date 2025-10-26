'use client'
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { AllData } from '../page'
import { useCartStore } from '../store/store'

export default function Product({ data }: { data: AllData }) {
    const [change, setChange] = useState(false)
    const handleChangeImg = () => {
        setChange(!change)
    }
    const theme = useTheme()

    const { addItem, items, removeItem } = useCartStore()
    const productId = String(data.id)
    console.log(items)

    return (
        <Container maxWidth={false} disableGutters sx={{ width: "100%", marginTop: 5 }}>
            <Stack direction={{ xs: "column", lg: "row" }} >
                <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} width={{ xs: "100%", md: "60%" }}>
                        <Image src={data.img[change ? 1 : 0]} width={800} height={800} alt={data.name} className='object-cover  h-[90vh]' />
                    <Stack direction={{ xs: "row", lg: "column" }} order={{ xs: 2, lg: "inherit" }} width={"20%"}>
                        {data.img.map((img, k) => (
                            <Button key={k} onClick={handleChangeImg}>
                                <Image src={img} width={100} height={100} alt={data.name} />
                            </Button>
                        ))}
                    </Stack>
                </Box>
                <Stack width={{ xs: "100%", md: "35%" }} direction={"column"} paddingLeft={5} mt={5} useFlexGap justifyContent={"start"} gap={5}>
                    <Typography variant='h1' fontSize={{ xs: 20, md: 30, lg: 40 }}>{data.name}</Typography>
                    <Typography variant='body1' fontSize={20}>${data.price}</Typography>
                    <Typography variant='body1' fontSize={20}>{data.description}</Typography>

                    <Typography variant='body2' fontSize={30}>quantity</Typography>
                    <Box >
                        <Button sx={{ color: theme.palette.text.primary, fontSize: 22 }} variant='myCustom'>-</Button>
                        <Typography fontSize={16} padding={5} variant='overline'>1</Typography>
                        <Button sx={{ color: theme.palette.text.primary, fontSize: 22 }} variant='myCustom'>+</Button>
                    </Box>
                    <Box width={"100%"} display={"flex"} gap={1}>
                        <Button variant='myCustom' sx={{ width: "65%" }} onClick={() => addItem({ id: productId, name: data.name, price: data.price, quantity: 1 })}><Typography variant='subtitle1'>add to cart</Typography></Button>
                        <Button variant='text' sx={{ border: `1px solid ${theme.palette.text.primary}`, borderRadius: 4 }}>❤️</Button>
                    </Box>
                </Stack>
            </Stack>



            {/* <div>{items.map(item => <p>{item.id}</p>)}</div> */}
        </Container>
    )
}
