"use client"
import { Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useCartStore } from "../store/store";
import Link from "next/link";

export default function HomeCard() {
  const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * (12 - 1 + 1)))
  const theme = useTheme()
  const { addItem } = useCartStore()



  const { data, isLoading } = useQuery({
    queryKey: ["randomProduct", randomNum], // کلید کش شامل عدد فعلی
    queryFn: async () => {
      const res = await axios.get(
        "https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products/" + randomNum
      )
      return res.data
    },
    placeholderData: { img: "HomeCard1.avif", name: "", description: "", price: 199 },
    staleTime: 30000, // داده کش‌شده 1 دقیقه معتبره
    gcTime: 30000
  })


  console.log(data)
  const productId = String(data?.id)
  return (
    <Link href={data?.category + '/' + data?.id + data?.name}>
      <Card sx={{ maxWidth: 450, padding: 3, borderRadius: 8, display: { sx: "none", lg: "flex" }, flexDirection: "column" }}>
        <CardMedia
          sx={{ height: { xs: 250, lg: 250 }, borderRadius: 3, width: "100%" }}
          image={data?.img}
          title="green iguana"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight={900} sx={{ color: 'text.secondary' }}>
            ${data?.price}.00
          </Typography>
          <Typography variant="body2" fontSize={{ xs: 12, lg: 16 }} sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2, // فقط دو خط نشون بده
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
