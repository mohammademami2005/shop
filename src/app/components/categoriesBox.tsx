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

interface CategoriesBoxProps {
    data: string[] | null;
}

// روش صحیح با const و React.FC
const CategoriesBox: React.FC<CategoriesBoxProps> = ({ data }) => {
    const theme = useTheme();
    console.log(data);

    if (!data) return null; // اگر data null بود چیزی رندر نکن

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
            <Typography variant='h5' color={theme.palette.text.primary}>
                Categories
            </Typography>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={5}
                slidesPerView={8}
                navigation={false}
                loop={true}
                autoplay={{ delay: 3000 }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                p: 2,
                                borderRadius: 2,
                                width: 120,
                            }}
                        >
                            <Link
                                href={"category/" + item}
                                className='flex flex-col items-center gap-5'
                            >
                                <Avatar
                                    src={item + ".png"}
                                    alt={item}
                                    sx={{ width: 100, height: 100, objectFit: "contain", bgcolor: "gray" }}
                                />
                                <Typography
                                    variant="body1"
                                    align="center"
                                    fontSize={16}
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {item}
                                </Typography>
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default CategoriesBox;
