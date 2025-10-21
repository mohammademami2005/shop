import { Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxWidth={"lg"} sx={{background:"red"}} >
      <Typography variant="h1" >home page </Typography>
    </Container>
  );
}
