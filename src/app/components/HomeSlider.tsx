import { Paper } from '@mui/material'
import React from 'react'

export default function HomeSlider() {
  return (
    <>
    <div className='h-[35vh] w-full' >
      <Paper sx={{backgroundImage:"url(https://i.postimg.cc/wMR6dyzV/c837a6-96481ea655134a6789d7fdc909b280d2-mv2.avif)" , width:"50%" , borderRadius:6 , margin:"auto" , height:"55vh" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundPosition:"center"}}>
        home slider
      </Paper>
    </div>
    </>
  )
}
