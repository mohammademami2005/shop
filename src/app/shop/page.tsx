import React from 'react'
import { getData } from '../page'
import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import Link from 'next/link'
import Filtering from '../components/filltering'


export default async function Page() {
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
   const  myData = Array.isArray(data) ? data : data? [data] : []
   if(dataError) throw data

  return (
    <Container component={"main"} maxWidth={false} disableGutters sx={{ marginTop: 4 , width:"100%" }} >
      <Box component={"nav"} sx={{ paddingLeft:3 ,  width:{xs:"100%" , lg:"30%"}}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary', fontSize: 17 }}>shop</Typography>
        </Breadcrumbs>
      </Box>
          <Filtering data={myData} />
    </Container>
  )
}
