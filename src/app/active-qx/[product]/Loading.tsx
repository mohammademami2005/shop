import React from 'react'
import { Box, Button, Container, Skeleton, Stack, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth={false} disableGutters sx={{ width: "100%", marginTop: 5 }}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
        {/* -------------------- بخش عکس‌ها -------------------- */}
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          width={{ xs: "100%", md: "60%" }}
          gap={2}
        >
          {/* تصویر اصلی */}
          <Skeleton
            variant="rounded"
            width={800}
            height={800}
            sx={{ borderRadius: 4 }}
          />

          {/* لیست تصاویر کوچک */}
          <Stack direction={{ xs: "row", lg: "column" }} width={"20%"} spacing={2}>
            {[...Array(3)].map((_, k) => (
              <Skeleton
                key={k}
                variant="rounded"
                width={100}
                height={100}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Stack>
        </Box>

        {/* -------------------- بخش اطلاعات محصول -------------------- */}
        <Stack
          width={{ xs: "100%", md: "35%" }}
          direction={"column"}
          paddingLeft={5}
          marginTop={8}
          spacing={4}
        >
          {/* نام محصول */}
          <Skeleton variant="text" width="80%" height={50} />

          {/* قیمت */}
          <Skeleton variant="text" width="40%" height={40} />

          {/* توضیحات */}
          <Box>
            <Skeleton variant="text" width="100%" height={25} />
            <Skeleton variant="text" width="95%" height={25} />
            <Skeleton variant="text" width="85%" height={25} />
          </Box>

          {/* مقدار (quantity) */}
          <Skeleton variant="text" width="50%" height={35} />
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Skeleton variant="rounded" width={40} height={40} />
            <Skeleton variant="text" width={60} height={30} />
            <Skeleton variant="rounded" width={40} height={40} />
          </Box>

          {/* دکمه‌ها */}
          <Box width={"100%"} display={"flex"} gap={2}>
            <Skeleton variant="rounded" width="65%" height={50} />
            {/* <Skeleton variant="rounded" width={50} height={50} /> */}
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
