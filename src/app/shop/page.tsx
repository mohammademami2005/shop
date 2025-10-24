import React from 'react'
import { getData } from '../page'
import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import Link from 'next/link'
import ProductClientRender from '../components/ProductClientRender'

export default async function Page() {
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
  return (
    <Container maxWidth={false} disableGutters sx={{ marginTop: 4 }} >
      <Box sx={{ paddingLeft:3}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>shop</Typography>
        </Breadcrumbs>
        <Typography variant='h1'>All Products</Typography>
      </Box>

      <Box display={'flex'}>
        <Box>
          {/* <ProductClientRender data={data} /> */}
        </Box>
        <Box></Box>
      </Box>
    </Container>
  )
}
