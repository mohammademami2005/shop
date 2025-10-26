'use client'
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AllData } from '../page'
import { useCartStore } from '../store/store'

export default function Product({ data }: { data: AllData }) {
    const [change, setChange] = useState(0)
    const [quantity1, setQuantity] = useState(0)
    const [btnDesabled, setBtnDesabled] = useState(false)

    const theme = useTheme()

    const { addItem, items, removeItem, quantityPlus, quantityMinus } = useCartStore()
    const productId = String(data.id)

    useEffect(() => {
        const foundItem = items.find((item) => item.id === productId)
        if (foundItem) {
            setQuantity(foundItem.quantity)
        } else {
            setQuantity(0)
        }
        setBtnDesabled(!foundItem || foundItem.quantity === 0)

    }, [items, productId])

    return (
        <Container maxWidth={false} disableGutters sx={{ width: "100%", marginTop: 5 }}>
            <Stack direction={{ xs: "column", lg: "row" }} >
                <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} width={{ xs: "100%", md: "60%" }}>
                    <Image src={data.img[change]} width={800} height={800} alt={data.name} className='object-cover  h-[90vh]' />
                    <Stack direction={{ xs: "row", lg: "column" }} order={{ xs: 2, lg: "inherit" }} width={"20%"}>
                        {data.img.map((img, k) => (
                            <Button key={k} onClick={() => setChange(k)}>
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
                        <Button sx={{ color: theme.palette.text.primary, fontSize: 22 }} variant='myCustom' onClick={() => quantityMinus(productId)} disabled={btnDesabled}>-</Button>
                        <Typography fontSize={16} padding={5} variant='overline'>{quantity1}</Typography>
                        <Button sx={{ color: theme.palette.text.primary, fontSize: 22 }} variant='myCustom' onClick={() => quantityPlus(productId)} disabled={btnDesabled}>+</Button>
                    </Box>
                    <Box width={"100%"} display={"flex"} gap={1}>
                        <Button variant='myCustom' sx={{ width: "65%" }} onClick={() => addItem({ id: productId, name: data.name, price: data.price, quantity: 1, category: data.category, description: data.description, img: data.img, bestSells: data.bestSells })}><Typography variant='subtitle1'>add to cart</Typography></Button>
                        <Button variant='text' sx={{ border: `1px solid ${theme.palette.text.primary}`, borderRadius: 4 }}>❤️</Button>
                    </Box>
                </Stack>
            </Stack>



            {/* <div>{items.map(item => <p>{item.id}</p>)}</div> */}
        </Container>
    )
}
