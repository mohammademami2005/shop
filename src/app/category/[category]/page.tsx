import FechData, { Product } from '@/app/api/getData'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { JSX } from 'react'
import darkTheme from '@/app/theme/darkTheme'
import lightTheme from '@/app/theme/lightTheme'
import Link from 'next/link'
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

export default async function page({ params }: { params: { category: string } }): Promise<JSX.Element> {
    console.log(params.category)
    const { data, error } = await FechData(`https://dummyjson.com/products/category/${params.category}`)

    if (error) {
        return (
            <div>we have a error {error.message}</div>
        )
    }
    return (
        <Container maxWidth={false} sx={{paddingTop:7}} >
            <Box display={"flex"} flexWrap={"wrap"} gap={4} justifyContent={'center'} >
                {data && data.products.map((item, i) => {
                    return (
                        <Card key={i} sx={{ maxWidth: 290 , borderRadius:"25px" ,padding:"10px" }}>
                            <CardActionArea>
                                <CardMedia
                                sx={{ borderRadius:"5%" , width:"80%" , height:"80%" , margin:"auto"}}
                                    component="img"
                                    height="100"
                                    image={item.thumbnail}
                                    alt={item.title}
                                />

                                <CardContent>
                                    {/* <Box display={"flex"}>
                                        {item.images.map((img , i)=>(
                                            <Image key={i} src={img} alt={item.title} width={70} height={70} />
                                        ))}
                                    </Box> */}
                                    <Typography variant='body1'>{item.brand}</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                         <Link href={`/products/${item.id}-${item.title}`}>{item.title}</Link>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" >
                                        ${item.price}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        ⭐{item.rating} / 5
                                    </Typography>
                                    <Box sx={{width:"100%" , display:'flex' , justifyContent:"space-around"}}>
                                        <Button variant='outlined'>add to cart</Button>
                                        <Button variant='text'>❤️</Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Box>
        </Container>
    )
}
