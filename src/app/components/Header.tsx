import { AppBar, Box, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import HeaderClient from './headerClient';
import Link from 'next/link';

export default function Header() {
  const navLinks = ["Shop", 'Best Sellers', 'Active QX', 'Artisanal', 'Kids', 'About Us']
  return (
    <AppBar position='static' sx={{ backgroundColor: "primary" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/"} className='flex justify-around items-center'>
          {/* logo */}
          <Typography variant='body1' fontSize={30}>QUENX.</Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navLinks.map((link) => (
            <Link  key={link} href={link}>
              {link}
            </Link>
          ))}
        </Box>
        <HeaderClient />
      </Toolbar>
    </AppBar>
  )
}
