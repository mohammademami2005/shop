import { AppBar, Box, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import HeaderClient from './headerClient';
import Link from 'next/link';
import { getCategory } from '../page';

export default async function Header() {
  const {category , error} = await getCategory()
  const navLinks = ["Shop", 'Best Sellers', 'active-qx', 'artisanal', 'kids', 'About Us']
  return (
    <AppBar position='static' sx={{ backgroundColor: "primary" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/"} className='flex justify-around items-center'>
          {/* logo */}
          <Typography variant='body1' fontSize={30}>QUENX.</Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 , fontWeight:500}}>
          <Link href={"/shop"} >Shop</Link>
          <Link href={"/best-sellers"} >best sells</Link>
          {category?.map((link) => (
            <Link  key={link.id} href={"/"+link.name}>
              {link.name}
            </Link>
          ))}
          <Link href={"about"} >about us</Link>
        </Box>
        <HeaderClient />
      </Toolbar>
    </AppBar>
  )
}
