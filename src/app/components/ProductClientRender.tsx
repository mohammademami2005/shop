"use client"
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { AllData } from "../page";
import Link from "next/link";
export default function ProductClientRender({ data }: { data: AllData[] | AllData | null }) {
    // const [state, setState] = useState(0)
    const theme = useTheme()
    // const {addItem , items} = useCartStore()
    // console.log(items)
    const dataArray = Array.isArray(data) ? data : data ? [data] : [];
    return (
        <Stack spacing={{xs:3 , lg:5}} useFlexGap direction={"row"} sx={{ flexWrap: "wrap", padding: 2, alignItems: "center", paddingLeft: { xs: 0, lg: 10 }, justifyContent: {xs:"center" , lg:"start"} }} gap={{xs:2 ,lg:5}} width={"100%"} height={"100%"} >
            {
                dataArray?.map((item, i) => (
                    <Box key={i} position={"relative"} width={{ xs: 180, lg: 300 }} >
                        <Link  href={item.category + "/" + item.id + item.name}  >

                            <Box className='productImgChange' margin={"auto"} borderRadius={5} position={"relative"} overflow={'hidden'} bgcolor={"green"}>
                                <Image src={item.img[0]} alt={item.name} width={500} height={500} />
                                <Image src={item.img[1]} alt={item.name} width={500} height={500} className="absolute top-0 left-0 " />
                            </Box>
                            <Box width={{xs:"100%",lg:"50%"}} height={"fit-content"} display={"flex"} flexDirection={'column'} justifyContent={"center"} paddingLeft={{xs:1 , lg:4}}  >
                                <Typography variant="subtitle1" textAlign={"justify"} width={"100%"} fontSize={{ xs:13 , md: 20 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" fontWeight={800} fontSize={{ xs: 14, md: 16 }} >
                                    ${item.price}.00
                                </Typography>
                            </Box>
                            {item.bestSells ? <Typography variant="body2" fontSize={{xs:10 ,lg:25}} color="black" padding={1} borderRadius={2} position={"absolute"} className="absolute top-3 left-3 bg-blue-300">best seller</Typography> : null}
                        </Link>
                    </Box>
                ))
            }
        </Stack>

    )
}