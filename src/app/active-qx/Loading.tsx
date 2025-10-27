import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

export default function Loading() {
    return (
        <Stack
            spacing={5}
            useFlexGap
            direction={"row"}
            sx={{
                flexWrap: "wrap",
                padding: 2,
                alignItems: "center",
                paddingLeft: { xs: 0, lg: 10 },
                justifyContent: "start",
            }}
            width={"100%"}
            height={"100%"}
        >
            {[...Array(6)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        width: { xs: "100%", sm: "45%", md: "30%" },
                        position: "relative",
                        gap: 2,
                    }}
                >
                    {/* Image skeleton */}
                    <Skeleton
                        variant="rounded"
                        width={300}
                        height={300}
                        sx={{ borderRadius: 5 }}
                    />

                    {/* Text skeletons */}
                    <Box
                        width={"50%"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"start"}
                        paddingLeft={2}
                    >
                        <Skeleton variant="text" width={200} height={40} />
                        <Skeleton variant="text" width={80} height={40} />
                    </Box>

                    {/* Badge skeleton (مثل best seller) */}
                    <Skeleton
                        variant="rounded"
                        width={80}
                        height={25}
                        sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            borderRadius: "16px",
                        }}
                    />
                </Box>
            ))}
        </Stack>
    )
}
