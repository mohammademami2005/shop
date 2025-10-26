import { getData } from '@/app/page'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'


export default async function Page({ params }: { params: { product: string } }) {
  const id = parseInt(params.product)
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products/"+id)
  let newData = Array.isArray(data) ? data : data? [data]:[]
  return (
    <section>
      <Box sx={{ paddingLeft: 3, width: "30%" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
           color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>active-qx</Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>{newData.map(item => item.name)}</Typography>
        </Breadcrumbs>
      </Box>
    </section>
  )
}
