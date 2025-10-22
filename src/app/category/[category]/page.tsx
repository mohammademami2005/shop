import FechData, { Product } from '@/app/api/getData'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { JSX } from 'react'

// async function getData(url:string) {
//     try {
//         const res = await fetch(url)
//         if(!res.ok) throw new Error("faild to fetch data" + res.status)
//         const data = res.json()
//         return {data , err : null}
//     } catch (err) {
//         return {data : null , error : err}
//     }
// }

export default async function page({params}:{params:{category:string}}): Promise<JSX.Element> {
    console.log(params.category)
    // const {data , error} = await getData("https://dummyjson.com/products/category/"+params.category)
    const {data , error} = await FechData("https://dummyjson.com/products/category/"+params.category)

    if(error) {
        return(
            <div>we have a error {error.message}</div>
        )
    }    
  return (
    <Container maxWidth={false} >
        <Box display={"flex"} flexWrap={"wrap"}>
            {data && data.products.map((item , i)=>{
                return(
                    <Box key={i} border={"1px solid black"}>
                    <Typography variant='h4'>{item.title}</Typography>
                    {item.images.map((img , i2)=>(
                        <div key={i2}>
                            <Image src={img} alt={item.title}  width={50} height={50}/>
                        </div>
                    ))}
                    </Box>
                )
            })}
        </Box>
    </Container>
    )
}
