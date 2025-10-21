"use client"
import { Avatar, Box, Container, Typography, useTheme } from '@mui/material'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import Link from 'next/link';

export default function CategoriesBox({ data }: { data: string[] }) {
    const theme = useTheme()
    return (
        <Container maxWidth={false} sx={{ display: "flex", flexWrap: "wrap", width: "100%", height: "auto", backgroundColor: theme.palette.background.default  }} >
            <Typography variant='h5' color={theme.palette.text.primary} >
                categories
            </Typography>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={5}
                slidesPerView={8}
                navigation={false}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay
            >
                {data && data.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    p: 2,
                                    m: 1,
                                    borderRadius: 2,
                                    // boxShadow: 2,
                                    width: 120, 
                                }}
                            >
                                {/* تصویر دایره‌ای */}
                                <Avatar
                                    src={item + ".png"}
                                    alt={item}
                                    sx={{ width: 100,objectFit:"contain", height: 100, bgcolor: "gray" }}
                                />
                                {/* اسم محصول */}
                                <Link href={"categories"+item}>
                                    <Typography variant="body1" align="center" sx={{ color: theme.palette.text.primary }}>
                                        {item}
                                    </Typography>
                                </Link>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>

    )
}
