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
                justifyContent: "center",
            }}
            width={"100%"}
            height={"100%"}
        >
            {[...Array(6)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap:"wrap",
                        alignItems: "start",
                        width: { xs: "40%", sm: "45%", md: "30%" },
                        position: "relative",
                        gap: 2,
                        // bgcolor:"red"
                    }}
                >
                    {/* Image skeleton */}
                    <Skeleton
                        variant="rounded"

                        sx={{ borderRadius: 5  , width:{xs:150 , lg:300} , height:{xs:150 , lg:300}}}
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
                        <Skeleton variant="text" sx={{width:{xs:100 ,lg:200}}} />
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
