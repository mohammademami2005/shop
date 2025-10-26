import React from 'react'
import { getData } from '../page'
import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import Link from 'next/link'
import ProductClientRender from '../components/ProductClientRender'
import Filtering from '../components/filltering'

export default async function Page() {
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
   let  myData = Array.isArray(data) ? data : data? [data] : []

  return (
    <Container maxWidth={false} disableGutters sx={{ marginTop: 4 , width:"100%" }} >
      <Box sx={{ paddingLeft:3 , width:"30%"}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 20 }}>shop</Typography>
        </Breadcrumbs>
        
      </Box>

          <Filtering data={myData} />
      
    </Container>
  )
}
