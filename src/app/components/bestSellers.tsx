"use client"
import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East';
import { AllData } from '../api/getData'



export default function BestSells({ data }: { data: AllData[] | AllData | null }) {
    const [newData, setNewData] = useState<AllData[] | undefined>()
    const arrData = Array.isArray(data) ? data : data ? [data] : [];

    useEffect(() => {
        const bestSells = arrData?.filter((item, i) => {
            return item.bestSells === true
        })

        setNewData(bestSells)
    }, [])

    const theme = useTheme()
    return (
        <Container
            component={"section"}
            maxWidth={false}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "auto",
                backgroundColor: theme.palette.background.default,
                gap: 2,
            }}
        >
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, paddingInline: 2 }}>
                <Typography variant='h5' fontSize={{ xs: 20, lg: 25 }} color={theme.palette.text.primary}>
                    OUR BEST SELLERS
                </Typography>
                <Link href={"/best-sellers"}>
                    <Typography variant='body2' fontSize={{ xs: 16, lg: 20 }} sx={{
                        color: "primary",
                        cursor: "pointer",
                        '&:hover': {
                            color: '#4287f5',
                            transform: 'scale(1.05)',
                            transition: "all 0.5s"
                        },
                    }}>view all <EastIcon /> </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "row" }, gap: "1%", flexWrap: "wrap" }}>

                {newData?.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 2,
                            borderRadius: 2,
                            width: { xs: "48%", lg: "24%" },
                            position: "relative"
                        }}
                    >
                        <Link
                            href={"best-sellers/" + item.id + item.name}
                            className='flex flex-col items-center gap-5  '
                            style={{ flexDirection: "column" }}
                        >
                            <Image src={item.img[0]} alt={item.name} width={800} height={800} className='rounded-3xl' />
                            <Typography variant='body2' fontSize={{ xs: 14, lg: 20 }} sx={{
                                color: theme.palette.text.primary,
                                '&:hover': {
                                    color: '#4287f5',
                                    transform: 'scale(1.05)',
                                    transition: "all 0.5s"
                                },
                            }}>{item.name} <EastIcon fontSize={'small'} /> </Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
