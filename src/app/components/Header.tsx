import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import HeaderClient from './headerClient';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position='static' sx={{backgroundColor:"primary"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/"} className='flex justify-around items-center'>
          {/* logo */}
          <Image
            src="/logo.png"
            alt="MyStore - Best Electronics Shop"
            width={50}
            height={50}
            priority
          />
          <Typography variant='h1' fontSize={30}>SHOPIFY</Typography>
        </Link>
        <HeaderClient />
      </Toolbar>
    </AppBar>
  )
}
