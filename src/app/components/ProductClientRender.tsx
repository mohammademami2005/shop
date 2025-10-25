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
        <Container maxWidth={false} disableGutters sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" , gap:4}} >
            {
                data?.map((item, i) => (
                    <Box  key={i} sx={{ display: "flex", justifyContent: 'start', flexWrap: 'wrap', alignItems: "center", height: 500, width: "30%", borderRadius: 5}} >
                        <Box  className='productImgChange' margin={"auto"} borderRadius={5} overflow={'hidden'}>
                            <Image src={item.img[0]} alt={item.name} width={400} height={400}  />
                            <Image src={item.img[1]} alt={item.name} width={400} height={400} className="absolute top-0 left-0 opacity-0" />
                        </Box>
                        <Box width={"50%"} height={"fit-content"} display={"flex"} flexDirection={'column'} justifyContent={"center"}  paddingLeft={4}  >
                            <Typography variant="subtitle1" fontSize={20}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" fontSize={16} >
                                ${item.price}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </Container>

    )
}