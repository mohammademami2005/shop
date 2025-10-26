"use client"
import React, { useEffect, useState } from 'react'
import { AllData } from '../page'
import { Box, Container, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East';



export default function BestSells({ data }: { data: AllData[]|AllData | null }) {
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
                <Typography variant='h5' color={theme.palette.text.primary}>
                    OUR BEST SELLERS
                </Typography>
                <Typography variant='body2' fontSize={20} sx={{
                    color: "black",
                    cursor: "pointer",
                    '&:hover': {
                        color: '#4287f5',
                        transform: 'scale(1.05)',
                        transition: "all 0.5s"
                    },
                }}>view all <EastIcon /> </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>

                {newData?.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 2,
                            borderRadius: 2,
                            // width: 120,
                            position: "relative"
                        }}
                    >
                        <Link
                            href={"bestSells/" + item.name}
                            className='flex flex-col items-center gap-5  '
                            style={{flexDirection:"column"}}
                        >
                            <Image src={item.img[0]} alt={item.name} width={800} height={800} className='rounded-3xl'  />
                            <Typography variant='body2' fontSize={20} sx={{
                                color: theme.palette.text.primary,
                                '&:hover': {
                                    color: '#4287f5',
                                    transform: 'scale(1.05)',
                                    transition: "all 0.5s"
                                },
                            }}>{item.name} <EastIcon /> </Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
