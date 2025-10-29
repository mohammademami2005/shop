"use client"

import { Box, Button, Stack, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                backgroundImage: 'url(/not-found.png)',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center',
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >

            <Box
                sx={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: `rgba(0,0,0,0.05)`,
                    borderRadius: "20px",
                    p: 4,
                    textAlign: "center",
                    width:"90%",
                    height:"90%",
                    display:"flex" , 
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    gap:5
                }}
            >
                <Typography variant="h2" fontWeight="bold">
                    404
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                    oh sorry
                </Typography>
                <Typography variant="h5" color={"red"}>
                    The requested page was not found.!
                </Typography>

                <Link href="/" passHref>
                    <Button variant="text" sx={{ color: theme.palette.text.primary, p: 2, border: `1px solid ${theme.palette.text.primary}` }}>
                        Return to home page
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}
