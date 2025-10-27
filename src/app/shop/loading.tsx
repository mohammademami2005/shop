"use client"
import { Box, Container, Divider, Skeleton, Slider, Stack } from "@mui/material";

export default function Loading() {
    return (
        <Container maxWidth={false} disableGutters >
            <Skeleton variant='text' width={320} height={50} ></Skeleton>
            <Box display={'flex'} paddingLeft={2} gap={5} marginTop={5}>
                <Stack direction={'column'} useFlexGap width={"20%"} position={"relative"} >
                    <Stack gap={2} direction={"column"} width={"100%"} className="sticky top-0 left-0 " >
                        <Skeleton variant='text' width={270} height={60}></Skeleton>
                        <Divider />
                        <Stack direction={"column"} alignItems={"start"}>
                            <Skeleton variant='text' width={250} height={50} ></Skeleton>
                            <Skeleton variant='text' width={250} height={50} ></Skeleton>
                            <Skeleton variant='text' width={250} height={50} ></Skeleton>
                            <Skeleton variant='text' width={250} height={50} ></Skeleton>
                            <Skeleton variant='text' width={250} height={50} ></Skeleton>
                        </Stack>
                        <Skeleton variant='text' width={270} height={60}></Skeleton>
                        <Divider />
                        <Slider
                            sx={{ width: "80%", margin: "auto" }}
                            getAriaLabel={() => 'Temperature range'}

                            valueLabelDisplay="auto"
                        />
                        <Stack direction={"row"} justifyContent={"space-between"} >
                            <Skeleton variant="text" width={60} height={50} />
                            <Skeleton variant="text" width={60} height={50} />
                        </Stack>
                        <Divider />
                    </Stack>
                </Stack>
                <Box width={"80%"}>
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
                </Box>
            </Box>
        </Container>



    );
}
