import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import HeaderClient from './headerClient';

export default function Header() {
  return (
    <AppBar position='static' >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* logo */}
        <Image
          src="/logo.png"
          alt="MyStore - Best Electronics Shop"
          width={50}
          height={50}
          priority
        />
        <HeaderClient />
      </Toolbar>
    </AppBar>
  )
}
