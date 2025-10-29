"use client"

import { Avatar, Box, Container, Typography, useTheme } from '@mui/material'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import { Categories } from '../api/getData';

interface CategoriesBoxProps {
    data: Categories[] | null;
}

// روش صحیح با const و React.FC
const CategoriesBox: React.FC<CategoriesBoxProps> = ({ data }) => {
    const theme = useTheme();
    console.log(data);

    if (!data) return null; // اگر data null بود چیزی رندر نکن

    return (
        <Container
            component={'section'}
            maxWidth={false}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "auto",
                backgroundColor: theme.palette.background.default,
                gap: 2,
                marginTop: 20
            }}
        >
            <Typography variant='h5' color={theme.palette.text.primary} paddingInline={3}>
                SHOP BY COLLECTION
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>

                {data.map((item, i) => (
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
                            href={item.name}
                            className='flex flex-col items-center gap-5 rounded-3xl  overflow-hidden sm:flex-col lg:flex-row '
                        >
                            <Image src={item.img} alt={item.name} width={800} height={800} />
                            <Typography variant='body2' fontSize={20} sx={{
                                position: 'absolute', bottom: 30, right: 30,
                                color: "black",
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

export default CategoriesBox;
