"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
   Grid, // ✅ در MUI v6 از Grid2 استفاده کن
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1c1c1c",
        color: "#fff",
        py: 6,
        px: { xs: 3, md: 8 },
        borderRadius: 3,
        mt: 5,
        mb:3,
        mx:{xs:1 , lg:3}
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* SHOP */}
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              SHOP
            </Typography>
            <Stack spacing={1}>
              {["All products", "Best Sellers", "Active QX", "Artisanal", "Kids", "About Us"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* POLICIES */}
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              POLICIES
            </Typography>
            <Stack spacing={1}>
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Shipping Policy",
                "Refund Policy",
                "Accessibility Statement",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              CONTACT
            </Typography>
            <Stack spacing={1}>
              <Typography>500 Terry Francine St.</Typography>
              <Typography>San Francisco, CA 94158</Typography>
              <Typography>123-456-7890</Typography>
              <Typography>info@mysite.com</Typography>
            </Stack>
          </Grid>

          {/* SOCIAL */}
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              SOCIAL
            </Typography>
            <Stack spacing={1}>
              {["Instagram", "Facebook", "X", "Tik Tok"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* STAY IN THE LOOP */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              STAY IN THE LOOP
            </Typography>
            <Typography variant="body2" mb={2}>
              Sign up to receive updates and special offers
            </Typography>
            <TextField
              label="Email Address *"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiInput-underline:before": { borderBottomColor: "#666" },
              }}
            />
            <Typography color="error" variant="caption">
              Enter an email address like example@mysite.com.
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={{ color: "#fff" }} />}
              label="Yes, subscribe me to your newsletter. *"
              sx={{ mt: 1 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#4a90e2",
                color: "#fff",
                borderRadius: 2,
                fontWeight: 600,
                "&:hover": { bgcolor: "#357ABD" },
              }}
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          mt={5}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" fontWeight={800}>
            QUENX.
          </Typography>
          <Typography variant="body2" color="#aaa" mt={{ xs: 2, md: 0 }}>
            © 2035 by Quenx. Built on{" "}
            <Link href="#" style={{ color: "#4a90e2", textDecoration: "none" }}>
              Wix Studio
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
