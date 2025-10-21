import { Container, Typography } from "@mui/material";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Container maxWidth={false} sx={{background:"red"}} >
    <Header  />

      {/* <Typography variant="h1" >home page </Typography> */}
    </Container>
    </>
  );
}
