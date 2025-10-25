import React from 'react'

export default function Page({params}:{params:{product:string}}) {
    
  return (
    <div>{params.product} <h1>hellooooo</h1></div>
  )
}
