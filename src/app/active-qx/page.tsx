import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ProductClientRender from '../components/ProductClientRender'
import { getData } from '../api/getData'


export default async function Page() {
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
  const myData = Array.isArray(data) ? data : data ? [data] : []
  const newData = myData.filter(item => item.category === "active-qx")
  if(dataError) throw dataError

  return (
    <Container component={"main"} maxWidth={false} disableGutters sx={{ marginTop: 4 }} >
      <Box component={"nav"} sx={{ paddingLeft: 3,width:{xs:"100%" , lg:"30%"}}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>active-qx</Typography>
        </Breadcrumbs>
      </Box>
      {/* products */}
      <Box component={"section"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100%"} >
        <ProductClientRender data={newData} />
      </Box>
    </Container>
  )
}
