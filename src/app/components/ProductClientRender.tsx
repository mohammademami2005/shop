"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { Product } from "../api/getData";
import { useState } from "react";
export default function ProductClientRender({ data }: { data: Product }) {
    const [state, setState] = useState(0)
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex", justifyContent: 'center',gap:"4%", flexWrap: 'wrap', alignItems: "center", padding: "5%", height: "80vh", width:"80vw",borderRadius:5 , boxShadow:`10px 10px 50px ${theme.palette.text.primary}` }}>
            <Box width={"48%"} height={"100%"} bgcolor={theme.palette.background.default}  >
                {data?.images && (
                    <Box  width={"100%"} height={"80%"} bgcolor={theme.palette.text.secondary} borderRadius={"25px"} marginBottom={"2%"}>
                        <Image src={data.images[state]} width={500} height={500} alt={data.title} className="w-full h-full object-contain"/>
                    </Box>
                )}

                <Box display={"flex"} justifyContent={"space-around"} gap={"10px"}>
                    {data?.images.map((image, i) => (
                        <Box key={i} display={"flex"} justifyContent={"center"} bgcolor={theme.palette.text.secondary} borderRadius={'15px'} alignItems={"center"} width={100 / data.images.length + "%"} height={"auto"}  onClick={() => setState(i)}>
                            <Image src={image} width={75} height={75} alt={data.title} className="cursor-pointer" />
                        </Box>
                    ))}

                </Box>
            </Box>
            <Box width={"48%"} height={"100%"} display={"flex"} flexDirection={'column'} justifyContent={"center"} gap={7} padding={"2%"}>
                <Typography variant="h1" fontSize={32}>
                    {data.title}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary} fontSize={25}>
                   <Typography variant="caption" fontSize={18} color={theme.palette.text.primary}>by</Typography> {data.brand}
                </Typography>
                <Typography variant="body2" fontSize={35} >
                   ${data.price}
                </Typography>
                <Typography variant="h6" fontSize={18} >
                    {data.description}
                </Typography>
                <Box  display={"flex"} justifyContent={"space-evenly"}>
                    <Button variant="contained" sx={{width:"20%" }}>❤️</Button>
                    <Button variant="contained" sx={{width:"65%" , borderRadius:2 , background:theme.palette.primary.main}}>add to cart</Button>
                </Box>
            </Box>
        </Box>

    )
}