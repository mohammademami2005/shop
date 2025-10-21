import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import HomeSlider from "./components/HomeSlider";
import FechData from "./api/getData";
import CategoriesBox from "./components/categoriesBox";

export default async function Home() {
  const data = await FechData("https://dummyjson.com/products/category-list")
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
