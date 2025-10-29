"use client"
import { useCartStore } from '@/app/store/store'
import { Box, Button, Container, Divider, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Link from 'next/link'
export default function Page() {
    const { addItem, items, quantityMinus, quantityPlus, removeItem, totalAmount } = useCartStore()
    const theme = useTheme()

    return (

        <Container component={"main"} maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: { xs: "column", lg: 'row' }, justifyContent: "space-evenly", padding: { xs: 1, lg: 5 } }} >
            <Stack component={"section"} direction={"column"} width={{ xs: "100%", lg: "60%" }} >
                <Typography variant='h1' fontSize={{ xs: 20, lg: 30 }} mb={3} mt={{ xs: 3, lg: 0 }}>My Cart</Typography>
                <Divider />
                <Box component={"ul"}>
                    {items.length === 0 ? <Box display={"flex"} pt={3} flexDirection={"column"} gap={3} justifyContent={"center"} alignItems={"center"}>
                        <Typography variant='h1' fontSize={{ xs: 20, lg: 30 }}>yout cart is empty </Typography>
                        <Link href={"/shop"}>
                            <Typography variant='subtitle1' component={"button"} sx={{borderColor:theme.palette.text.primary , border:"1px solid", p:1 , borderRadius:2 , cursor:"pointer" , "&:hover":{color:theme.palette.background.default , bgcolor:theme.palette.text.primary , transition:"0.5s"}}}>go to shop</Typography>
                        </Link>
                    </Box> :
                        items.map((item) => {
                            return (
                                <Box component={"li"} key={item.id} >
                                    {/* <Divider /> */}
                                    <Stack direction={"row"} padding={2} alignItems={'center'} justifyContent={"space-between"} >
                                        <Stack direction={{ xs: "column", lg: "row" }} alignItems={"center"} gap={2}>
                                            <Image src={item.img[0]} alt={item.name} width={100} height={100} />
                                            <Box display={"flex"} flexDirection={"column"} justifyContent={'center'} gap={{ xs: 2, lg: 2 }}>
                                                <Typography variant='body1' fontSize={{ xs: 12, lg: 16 }}>{item.name}</Typography>
                                                <Typography variant='body1' fontWeight={600} fontSize={16}>${item.price}.00</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction={"row"} height={"100%"} alignItems={"center"} justifyContent={{ xs: 'center', lg: "space-between" }} width={'60%'} useFlexGap gap={{ xs: 3, lg: 0 }} >
                                            <Box display={{ xs: "flex" }} flexDirection={{ xs: "column", lg: 'row' }} justifyContent={"center"} width={"50%"} alignItems={"center"} >
                                                <Button sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}`, fontSize: 10, order: { xs: 2, lg: 0 } }} variant='text' onClick={() => quantityMinus(item.id)}>-</Button>
                                                <Typography fontSize={16} padding={{ xs: 2, lg: 5 }} variant='overline'>{item.quantity}</Typography>
                                                <Button sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}`, fontSize: 10, order: { xs: -2, lg: 0 } }} variant='text' onClick={() => quantityPlus(item.id)}>+</Button>
                                            </Box>
                                            <Box display={"flex"} flexDirection={{ xs: "column", lg: "row" }} justifyContent={'space-evenly'} width={'40%'} alignItems={"center"} gap={{ xs: 4, lg: 0 }}>
                                                <Typography variant='body1' fontWeight={600} fontSize={16}>${item.total}.00</Typography>
                                                <DeleteOutlineRoundedIcon sx={{ color: theme.palette.text.primary, cursor: "pointer" }} onClick={() => removeItem(item.id)} />
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Divider />
                                </Box>
                            )
                        })}
                </Box>
            </Stack>
            <Box component={"aside"} position={"relative"} width={{ xs: '100%', lg: "30%" }} marginTop={{ xs: 4, lg: 0 }} >
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
    )
}
