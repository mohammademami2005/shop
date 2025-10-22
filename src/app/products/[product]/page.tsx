import { Product } from '@/app/api/getData'
import ProductClientRender from '@/app/components/ProductClientRender'
import ProductImgSlider from '@/app/components/ProductClientRender'
import { Box, Container, Pagination } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export async function getData(url: string): Promise<{ data: Product | null, error: unknown | null }> {
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error("faild to fetch data" + res.status)
        const data = await res.json() as Product
        return { data, error: null }
    } catch (err) {
        return { data: null, error: err }
    }
}

export default async function page({ params }: { params: { product: string } }) {
    const { data, error } = await getData(`https://dummyjson.com/products/${parseInt(params.product)}`)
    console.log(data?.title)
    return (
        <Container maxWidth={false} disableGutters sx={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "100vh" }} >
          {data &&   <ProductClientRender data={data} />}
            {/* <Box>2</Box> */}
        </Container>
    )
}
