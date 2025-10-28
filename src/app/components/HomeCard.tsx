"use client"
import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useCartStore } from "../store/store";
import Link from "next/link";

export default function HomeCard() {
  const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * (12 - 1 + 1)))
  const theme = useTheme()
  const { addItem } = useCartStore()



  const { data, isLoading ,isError } = useQuery({
    queryKey: ["randomProduct", randomNum], // کلید کش شامل عدد فعلی
    queryFn: async () => {
      const res = await axios.get(
        "https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products/" + randomNum
      )
      return res.data
    },
    // placeholderData: { img: "HomeCard1.avif", name: "", description: "", price: 199 },
    staleTime: 30000,
    gcTime: 30000
  })

  if (isLoading) return <HomeCardSkeleton />
  if(isError) return <Error />

  const productId = String(data?.id)
  return (
    <Link href={data?.category + '/' + data?.id + data?.name}>
      <Card sx={{ maxWidth: 450, padding: 3, borderRadius: 8, display: { sx: "none", lg: "flex" }, flexDirection: "column" }}>
        <CardMedia
          sx={{ height: { xs: 250, lg: 250 }, borderRadius: 3, width: "100%" }}
          image={data?.img}
          title={data?.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight={900} sx={{ color: 'text.secondary' }}>
            ${data?.price}.00
          </Typography>
          <Typography variant="body2" fontSize={{ xs: 12, lg: 16 }} sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {data?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="myCustom" sx={{ color: theme.palette.text.primary, width: "100%" }} onClick={() => addItem({ id: productId, name: data.name, price: data.price, quantity: 1, category: data.category, description: data.description, img: data.img, bestSells: data.bestSells, total: 0 })}>add to cart</Button>
        </CardActions>
      </Card>
    </Link>
  )
}


const HomeCardSkeleton = () => {
  return (
    <Card sx={{ width: 450, padding: 3, borderRadius: 8, display: { xs: "none", lg: "flex" }, flexDirection: "column" }}>
      {/* تصویر */}
      <Skeleton variant="rectangular" height={250} sx={{ borderRadius: 3, width: "100%" }} />

      {/* محتوا */}
      <CardContent>
        <Skeleton variant="text" width="60%" height={30} />
        <Skeleton variant="text" width="40%" height={25} />
        <Skeleton variant="text" width="100%" height={50} />
      </CardContent>

      {/* دکمه */}
      <CardActions>
        <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 1 }} />
      </CardActions>
    </Card>
  )
}

const Error = () => {
  const theme = useTheme()
  const {addItem} = useCartStore()
  return (
    <Link href={"active-qx/1bio original"}>
      <Card sx={{ maxWidth: 450, padding: 3, borderRadius: 8, display: { sx: "none", lg: "flex" }, flexDirection: "column" }}>
        <CardMedia
          sx={{ height: { xs: 250, lg: 250 }, borderRadius: 3, width: "100%" }}
          image={"https://i.postimg.cc/wMR6dyzV/c837a6-96481ea655134a6789d7fdc909b280d2-mv2.avif"}
          title={'bio original'}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            'bio original'
          </Typography>
          <Typography variant="subtitle1" fontWeight={900} sx={{ color: 'text.secondary' }}>
            $119.00
          </Typography>
          <Typography variant="body2" fontSize={{ xs: 12, lg: 16 }} sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            The Bio Original blends comfort with performance for everyday runners. Designed with breathable mesh and lightweight cushioning. A timeless look that never goes out of style.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="myCustom" sx={{ color: theme.palette.text.primary, width: "100%" }} onClick={() => addItem({ id: '1', name: 'bio original', price: 119, quantity: 1, category: "active-qx", description: "The Bio Original blends comfort with performance for everyday runners. Designed with breathable mesh and lightweight cushioning. A timeless look that never goes out of style.", img: ["https://i.postimg.cc/wMR6dyzV/c837a6-96481ea655134a6789d7fdc909b280d2-mv2.avif"], bestSells: true, total: 0 })} >add to cart</Button>
        </CardActions>
      </Card>
    </Link>
  )
}