"use client"
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { AllData } from "../page";
import Link from "next/link";
export default function ProductClientRender({ data }: { data: AllData[]|AllData | null }) {
    // const [state, setState] = useState(0)
    const theme = useTheme()
    // const {addItem , items} = useCartStore()
    // console.log(items)
      const dataArray = Array.isArray(data) ? data : data ? [data] : [];
    return (
        <Stack spacing={3} useFlexGap direction={"row"}  sx={{flexWrap:"wrap", padding:2 , alignItems:"center"}}  width={"100%"} height={"100%"} >
            {
                dataArray?.map((item, i) => (
                    <Link  key={i} href={item.category+"/"+item.id+item.name} className="flex justify-start flex-wrap items-center sm:w-full md:w-[30%] rounded-2xl "  >
                        <Box  className='productImgChange' margin={"auto"} borderRadius={5} position={"relative"} overflow={'hidden'}>
                            <Image src={item.img[0]} alt={item.name} width={400} height={400}  />
                            <Image src={item.img[1]} alt={item.name} width={400} height={400} className="absolute top-0 left-0 " />
                        </Box>
                        <Box width={"50%"} height={"fit-content"} display={"flex"} flexDirection={'column'} justifyContent={"center"}  paddingLeft={4}  >
                            <Typography variant="subtitle1" textAlign={"justify"} width={"100%"} fontSize={{sx:4 , md:20}}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" fontSize={{sx:4 , md:16}} >
                                ${item.price}
                            </Typography>
                        </Box>
                    </Link>
                ))
            }
        </Stack>

    )
}