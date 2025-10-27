"use client"
import { useCartStore } from '@/app/store/store'
import { Box, Button, Container, Divider, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
export default function Page() {
    const { addItem, items, quantityMinus, quantityPlus, removeItem, totalAmount } = useCartStore()
    const theme = useTheme()

    return (
        <section>
            <Container maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: { xs: "column", lg: 'row' }, justifyContent: "space-evenly", padding: 5 }} >
                <Stack direction={"column"} width={"60%"}>
                    <Typography variant='h1' fontSize={{ xs: 20, lg: 30 }}>My Cart</Typography>
                    {items.map((item) => {
                        return (
                            <Box key={item.id}>
                                <Divider />
                                <Stack direction={"row"} padding={2} justifyContent={"space-between"}>
                                    <Stack direction={"row"} alignItems={"center"} gap={2}>
                                        <Image src={item.img[0]} alt={item.name} width={100} height={100} />
                                        <Box display={"flex"} flexDirection={"column"} height={"100%"} justifyContent={'center'} gap={2}>
                                            <Typography variant='body1'>{item.name}</Typography>
                                            <Typography variant='body1' fontWeight={600} fontSize={16}>${item.price}.00</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} width={"60%"}>
                                        <Box >
                                            <Button sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}`, fontSize: 10 }} variant='text' onClick={() => quantityMinus(item.id)}>-</Button>
                                            <Typography fontSize={16} padding={5} variant='overline'>{item.quantity}</Typography>
                                            <Button sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}`, fontSize: 10 }} variant='text' onClick={() => quantityPlus(item.id)}>+</Button>
                                        </Box>
                                        <Typography variant='body1' fontWeight={600} fontSize={16}>${item.total}.00</Typography>
                                        <DeleteOutlineRoundedIcon sx={{ color: theme.palette.text.primary, cursor: "pointer" }} onClick={() => removeItem(item.id)} />
                                    </Stack>
                                </Stack>
                                <Divider />
                            </Box>
                        )
                    })}
                </Stack>
                <Box position={"relative"} width={"30%"}>
                    <Stack direction={"column"} width={"100%"} height={"80vh"} position={"sticky"} top={"20%"} left={0} justifyContent={"start"} gap={5}>
                        <Typography variant='h1' fontSize={{ xs: 20, lg: 30 }}>Order Summary</Typography>
                        <Divider />
                        <Box display={'flex'} justifyContent={"space-between"} flexDirection={"row"}>
                            <Typography variant='subtitle1' fontSize={20}>Total</Typography>
                            <Typography variant='subtitle1' fontWeight={600} fontSize={20}>${totalAmount}.00</Typography>
                        </Box>
                        <Divider />
                        <Button variant='myCustom'>checkout</Button>
                    </Stack>
                </Box>
            </Container>
        </section>
    )
}
