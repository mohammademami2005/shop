import React from 'react'
import { getData } from '../page'



export default async function Page() {
    const {data , dataError} =await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
  return (
    <div>hello</div>
  )
}
