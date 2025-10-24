"use client"
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { AllData } from "../page";
export default function ProductClientRender({ data }: { data: AllData[] | null }) {
    // const [state, setState] = useState(0)
    const theme = useTheme()
    // const {addItem , items} = useCartStore()
    // console.log(items)
    return (
        <Container maxWidth={false} disableGutters >
            {
                data?.map((item, i) => (
                    <Box key={i} sx={{ display: "flex", justifyContent: 'center', gap: "4%", flexWrap: 'wrap', alignItems: "center", padding: "5%", height: "80vh", width: "80vw", borderRadius: 5, boxShadow: `10px 10px 50px ${theme.palette.text.primary}`, backgroundColor: "primary" }} >
                        <Box sx={{ position: 'relative' }} className='productImgChange'>
                            <Image src={item.img[0]} alt={item.name} width={400} height={400} className="absolute top-0 left-0 " />
                            <Image src={item.img[1]} alt={item.name} width={400} height={400} className="absolute top-0 left-0 opacity-0" />
                        </Box>
                        <Box width={"48%"} height={"100%"} display={"flex"} flexDirection={'column'} justifyContent={"center"} gap={2} padding={"2%"}>
                            <Typography variant="h1" fontSize={32}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" fontSize={35} >
                                ${item.price}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </Container>

    )
}