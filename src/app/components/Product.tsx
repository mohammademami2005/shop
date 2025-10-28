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
        <Container maxWidth={false} disableGutters sx={{ width: "100%", marginBlock: 5 }}>
            <Stack direction={{ xs: "column", lg: "row" }} >
                <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} width={{ xs: "100%", md: "60%" }}>
                    <Image src={data.img[change]} width={800} height={800} alt={data.name} className='object-cover  h-[40vh] lg:h-[90vh]' />
                    <Stack direction={{ xs: "row", lg: "column" }} order={{ xs: 2, lg: "inherit" }} width={"20%"}>
                        {data.img.map((img, k) => (
                            <Button key={k} onClick={() => setChange(k)}>
                                <Image src={img} width={100} height={100} alt={data.name} />
                            </Button>
                        ))}
                    </Stack>
                </Box>
                <Stack width={{ xs: "100%", md: "35%" }} direction={"column"} paddingLeft={{ xs: 0, lg: 5 }} mt={{xs:2 , lg:5}} useFlexGap justifyContent={"start"} gap={{xs:2 , lg:5}}>
                    <Typography variant='h1' fontSize={{ xs: 20, md: 30, lg: 40 }}>{data.name}</Typography>
                    <Typography variant='body1' fontSize={20}>${data.price}.00</Typography>
                    <Typography variant='body1' fontSize={{xs:14 , lg:20}}>{data.description}</Typography>
                    <Box display={"flex"} flexDirection={{xs:"row" ,lg:"column"}} gap={{xs:0 , lg:2}} justifyContent={"space-between"} alignItems={{xs:"center" , lg:"start"}}>
                        <Typography variant='body2' fontSize={{xs:20 , lg:30}}>quantity</Typography>
                        <Box >
                            <Button sx={{ color: theme.palette.text.primary, fontSize: 20 }} variant='myCustom' onClick={() => quantityMinus(productId)} disabled={btnDesabled}>-</Button>
                            <Typography fontSize={16} padding={5} variant='overline'>{quantity1}</Typography>
                            <Button sx={{ color: theme.palette.text.primary, fontSize: 22 }} variant='myCustom' onClick={() => quantityPlus(productId)} disabled={btnDesabled}>+</Button>
                        </Box>
                    </Box>
                    <Button variant='myCustom' sx={{ width: { xs: "100%", lg: "65%" } }} onClick={() => addItem({ id: productId, name: data.name, price: data.price, quantity: 1, category: data.category, description: data.description, img: data.img, bestSells: data.bestSells, total: 0 })}><Typography variant='subtitle1'>add to cart</Typography></Button>
                </Stack>
            </Stack>
        </Container>
    )
}
