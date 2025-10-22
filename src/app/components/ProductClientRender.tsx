"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useCartStore } from "../store/store";
import { Product } from "../api/getData";
import { useState } from "react";
export default function ProductClientRender({ data }: { data: Product }) {
    const [state, setState] = useState(0)
    const theme = useTheme()
    const {addItem , items} = useCartStore()
    console.log(items)
    return (
        <Box  sx={{ display: "flex", justifyContent: 'center',gap:"4%", flexWrap: 'wrap', alignItems: "center", padding: "5%", height: "80vh", width:"80vw",borderRadius:5 , boxShadow:`10px 10px 50px ${theme.palette.text.primary}` , backgroundColor:"primary"  }} >
            
            <Box width={"48%"} height={"100%"}  >
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
            <Box width={"48%"} height={"100%"} display={"flex"} flexDirection={'column'} justifyContent={"center"} gap={2} padding={"2%"}>
                <Typography variant="h1" fontSize={32}>
                    {data.title}
                </Typography>
                <Typography variant="body2" color={theme.palette.custom.texts.amber600} fontSize={25}>
                   {data.brand? <Typography variant="caption" fontSize={18} >by</Typography> : null} {data.brand}
                </Typography>
                <Typography variant="body2" fontSize={35} >
                   ${data.price}
                </Typography>
                <Typography variant="h6" fontSize={18} color={theme.palette.custom.texts.slate300}>
                    {data.description}
                </Typography>
                <Box  display={"flex"} justifyContent={"space-evenly"}>
                    <Button  sx={{width:"15%" , border:`1px solid ${theme.palette.primary.main} !important` }}>❤️</Button>
                    {/* <AddToCartBtn  sx={{width:"20%" }}>❤️</AddToCartBtn> */}
                    <Button variant="myCustom" sx={{width:"80%"}} onClick={()=> addItem}>add to cart</Button>
                </Box>
            </Box>
        </Box>

    )
}