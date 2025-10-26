import { Box, Container, Typography } from "@mui/material";
import CategoriesBox from "./components/categoriesBox";
import HomeCard from "./components/HomeCard";
import BestSells from "./components/bestSellers";
import Image from "next/image";
import Link from "next/link";


export interface Categories {
  name: string,
  img: string
  id: number
}

export async function getCategory(): Promise<{ category: Categories[] | null, error: null | unknown }> {
  try {
    const res = await fetch("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/category-list")
    if (!res.ok) throw new Error("filed to fetch")
    const category: Categories[] = await res.json()
    return { category, error: null }
  } catch (err) {
    return { category: null, error: err }
  }
}

export interface AllData {
  name: string
  price: number
  img: string[]
  bestSells: boolean
  category: string
  description: string
  id: number
}

export async function getData(url: string): Promise<{ data: AllData[]| AllData | null, dataError: null | unknown }> {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error("filed to fetch")
    const data: AllData[] = await res.json()
    return { data, dataError: null }
  } catch (err) {
    return { data: null, dataError: err }
  }
}

export default async function Home() {
  // const { data , error} = await FechData("https://dummyjson.com/products/category-list")
  const { category, error } = await getCategory()
  const { data, dataError } = await getData("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/products")
  console.log(category)
  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ marginTop: 5 }} >
        {/* title section */}
        <Box sx={{ backgroundImage: "url(/background1.png)", width: "95vw", height: "100vh", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", margin: "10px auto", borderRadius: 9, display: "flex" }}>
          <Box sx={{ width: "50%", height: "100%", padding: 5, color: "black" }}>
            <Typography variant="h1" sx={{ fontSize: "5rem", }} >WALKING WITH PURPOSE.</Typography>
            <Typography variant="body1" fontSize={30}>Premium Vegan Sneakers </Typography>
          </Box>
          <Box sx={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HomeCard />
          </Box>
        </Box>
        {/* title section */}
        <BestSells data={data} /> {/*  best sells */}

        <Container maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-evenly", marginTop: 20 }} >
          <Box sx={{ width: { xs: "100%", md: "40%" }, height: { xs: "45vh", md: "auto" }, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
            <Typography variant="h2">KIDS COLLECTION 20% OFF SALE</Typography>
            <Typography variant="subtitle2">Exclusive, one-time offer</Typography>
            <Link href={"/kids"} >SHOP NOW</Link>
          </Box>
          <Image src={"/kidsShoes.png"} alt="kids shoes" width={730} height={800} className="rounded-3xl" />
        </Container>

        <CategoriesBox data={category} /> {/* category list in home page */}

        <div className="w-full h-screen"></div>
      </Container>
    </>
  );
}
