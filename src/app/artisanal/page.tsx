import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ProductClientRender from '../components/ProductClientRender'
import { getData } from '../page'


export default async function Page() {
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
   const  myData = Array.isArray(data) ? data : data? [data] : []
  const newData = myData?.filter(item=> item.category === "artisanal")
  return (
        <Container maxWidth={false} disableGutters sx={{ marginTop: 4 }} >
      <Box sx={{ paddingLeft:3 , width:"30%"}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>artisanal</Typography>
        </Breadcrumbs>
        
      </Box>

          <ProductClientRender data={newData} />
      
    </Container>
  )
}
