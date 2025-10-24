import { Box, Container, Typography } from "@mui/material";
import HomeSlider from "./components/HomeSlider";
import CategoriesBox from "./components/categoriesBox";
import AppAppBar from "./components/newAppbar";

export interface Categories {
  name: string,
  img : string
  id: number
}

async function getData(url:string):Promise<{data : Categories[] | null , error : null | unknown}> {
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error("filed to fetch")
    const data: Categories[] = await res.json()
  return {data , error : null}
  } catch (err) {
    return {data:null , error : err}
  }
}

export default async function Home() {
  // const { data , error} = await FechData("https://dummyjson.com/products/category-list")
  const {data , error} = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/category-list")
  console.log(data)
  return (
    <>
    <Container maxWidth={false}  disableGutters >
      <Box sx={{backgroundImage:"url(/background1.png)" ,width:"95vw" , height:"100vh" , backgroundRepeat:"no-repeat" , backgroundPosition:"center center" , backgroundSize:"cover", margin:"10px auto" , borderRadius:9}}>
        <Box sx={{width:"50%" , height:"100%" , padding:5  }}>
          <Typography variant="h1" sx={{fontSize:"5rem" , }} >WALKING WITH PURPOSE.</Typography>
          <Typography variant="body1" fontSize={30}>Premium Vegan Sneakers</Typography>
        </Box>
        <Box sx={{width:"50%" , height:"100%" }}></Box>
      </Box>
      <CategoriesBox data={data}/>
      <div className="w-full h-screen"></div>
    </Container>
    </>
  );
}
