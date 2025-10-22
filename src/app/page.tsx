import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import HomeSlider from "./components/HomeSlider";
import FechData from "./api/getData";
import CategoriesBox from "./components/categoriesBox";

async function getData(url:string):Promise<{data : string[] | null , error : null | unknown}> {
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error("filed to fetch")
    const data: string[] = await res.json()
  return {data , error : null}
  } catch (err) {
    return {data:null , error : err}
  }
}

export default async function Home() {
  // const { data , error} = await FechData("https://dummyjson.com/products/category-list")
  const {data , error} = await getData("https://dummyjson.com/products/category-list")
  console.log(data)
  return (
    <>
    <Container maxWidth={false} sx={{background:"red"}} disableGutters >
    <Header  />
    <HomeSlider />
      {/* <Typography variant="h1" >home page </Typography> */}
      <CategoriesBox data={data}/>
      
    </Container>
    </>
  );
}
