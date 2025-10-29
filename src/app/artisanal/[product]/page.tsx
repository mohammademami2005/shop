import { getData } from '@/app/api/getData'
import Product from '@/app/components/Product'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default async function Page({ params }: { params: { product: string } }) {
  const { product } = await params  
  const id = parseInt(product)
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products/" + id)
  const newData = Array.isArray(data) ? data : data ? [data] : []
  if (dataError) throw dataError

  return (
    <Box component={"main"}>
      <Box component={"nav"} sx={{ paddingInline: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 3 }}>
          <Link
            color="inherit" href="/">
            Home
          </Link>
          <Link href={"/artisanal"}>
            artisanal
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>{newData.map(item => item.name)}</Typography>
        </Breadcrumbs>
        {newData.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </Box>
    </Box>

  )
}
