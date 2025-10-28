import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CategoriesBox from "./components/categoriesBox";
import HomeCard from "./components/HomeCard";
import BestSells from "./components/bestSellers";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";


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

export async function getData(url: string): Promise<{ data: AllData[] | AllData | null, dataError: null | unknown }> {
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
        <Box sx={{ backgroundImage: "url(/background1.png)", width: "95vw", height: { xs: "100vh", lg: "100vh" }, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", margin: "10px auto", borderRadius: 9, display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: { xs: "center", lg: "space-around" }, padding: { xs: 2, lg: 0 } }}>
          <Box sx={{ width: { xs: "100%", lg: "50%" }, height: "100%", padding: 5, color: "black", }}>
            <Typography variant="h1" fontSize={{ xs: 32, lg: 60 }} fontWeight={900} marginBottom={2}>WALKING WITH PURPOSE.</Typography>
            <Typography variant="body1" fontSize={{ xs: 20 }}>Premium Vegan Sneakers </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", lg: "50%" }, height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: { xs: "auto", lg: 0 } }}>
            <HomeCard />
          </Box>
        </Box>
        {/* title section */}
        <BestSells data={data} /> {/*  best sells */}

        <Container maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-evenly", marginTop: { xs: 2, lg: 20 }, paddingInline: { xs: 2, lg: 0 } }}>
          <Box sx={{ width: { xs: "100%", md: "40%" }, height: { xs: "45vh", md: "auto" }, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, p: 5 }}>
            <Typography variant="h2" fontSize={{ xs: 40, lg: 50 }} fontWeight={900}>KIDS COLLECTION 20% OFF SALE</Typography>
            <Typography variant="subtitle2">Exclusive, one-time offer</Typography>
            <Link href={"/kids"} >
              <Button variant="myCustom">SHOP NOW</Button>
            </Link>
          </Box>
          <Image src={"/kidsShoes.png"} alt="kids shoes" width={730} height={800} className="rounded-3xl" />
        </Container>

        <CategoriesBox data={category} /> {/* category list in home page */}

        <Box sx={{ backgroundImage: "url(/background2.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: { xs: "120vh", lg: "150vh" }, backgroundPosition: "center", marginTop: 5, display: "flex", justifyContent: { xs: "start", lg: "space-evenly" }, alignItems: { xs: "center", lg: "start" }, padding: { xs: 5, lg: 0 }, paddingTop: { xs: 10, lg: 10 } }} flexDirection={{ xs: "column", lg: "row" }} gap={{ xs: 2, lg: 0 }} color={"black"}>
          <Typography variant="h2" width={{ xs: "80%", lg: "40%" }} height={{ xs: "auto", lg: "20%" }} fontWeight={700} fontSize={{ xs: 35, lg: 40 }}>STEP INTO SUSTAINABILITY</Typography>
          <Typography variant="body1" width={{ xs: "80%", lg: "40%" }} fontSize={{ xs: 16, lg: 20 }}>This is the space to introduce visitors to the business or brand. Briefly explain who&apos;s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</Typography>
        </Box>

        <Box >
          <Typography variant="h3" fontSize={{ xs: 20, lg: 27 }} pl={4} py={5} sx={{ lineHeight: 1.5 }}>FIND OUT WHAT PEOPLE ARE SAYIG ABOUT QUENX</Typography>
          <Stack direction={{ xs: "column", lg: "row" }} justifyContent={"space-evenly"} gap={{ xs: 4, lg: 0 }} paddingInline={{ xs: 3, lg: 0 }}>
            <Stack direction={"column"} padding={5} bgcolor={"gray"} width={{ xs: "100%", lg: "28%" }} borderRadius={4} gap={2}>
              <Typography variant="h3" fontSize={{ xs: 20, lg: 25 }} >&quot;Eco-Friendly and Stylish&quot;</Typography>
              <Typography variant="body1" fontSize={{ xs: 13 }}>Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.</Typography>
              <Box display={"flex"} justifyContent={"start"} gap={5} alignItems={"center"}>
                <Image src={"/avatar1.png"} alt='' width={100} height={100} style={{ borderRadius: "50%" }} />
                <Typography variant="body2" fontWeight={800}>James Mitchell</Typography>
              </Box>
            </Stack>
            <Stack direction={"column"} padding={5} bgcolor={"gray"} width={{ xs: "100%", lg: "28%" }} borderRadius={4} gap={2}>
              <Typography variant="h3" fontSize={{ xs: 20, lg: 25 }} >&quot;Ideal for Active Lifestyles&quot;</Typography>
              <Typography variant="body1" fontSize={{ xs: 13 }}>Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.</Typography>
              <Box display={"flex"} justifyContent={"start"} gap={5} alignItems={"center"}>
                <Image src={"/avatar2.png"} alt='' width={100} height={100} style={{ borderRadius: "50%" }} />
                <Typography variant="body2" fontWeight={800}>Rebecca Thompson</Typography>
              </Box>
            </Stack>
            <Stack direction={"column"} padding={5} bgcolor={"gray"} width={{ xs: "100%", lg: "28%" }} borderRadius={4} gap={2}>
              <Typography variant="h3" fontSize={{ xs: 20, lg: 25 }} >&quot;My New Daily Essential&quot;</Typography>
              <Typography variant="body1" fontSize={{ xs: 13 }}>Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.</Typography>
              <Box display={"flex"} justifyContent={"start"} gap={5} alignItems={"center"}>
                <Image src={"/avatar3.png"} alt='' width={100} height={100} style={{ borderRadius: "50%" }} />
                <Typography variant="body2" fontWeight={800}>Sophia Navarro</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
