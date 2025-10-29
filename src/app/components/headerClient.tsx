"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Badge,
    InputBase,
    Paper,
    Drawer,
    Divider,
    Avatar,
    Snackbar,
    Alert,
    useTheme,
} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCartStore, useThemeStore } from "../store/store";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from "next/link";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AllData } from "../page";
import Search from "./search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname } from "next/navigation";


export default function HeaderClient() {
    const { mode, toggleTheme } = useThemeStore();
    const { items } = useCartStore()
    const theme = useTheme()
    const path = usePathname()

    const [open, setOpen] = useState(false)
    const navLinks = ["shop", 'best-sellers', 'active-qx', 'artisanal', 'kids', 'About']
    const [myData, setMyData] = useState<AllData[] | AllData | null>([])
    const [alert, setAlert] = useState<boolean>(false)

    const toggleDrawer = React.useCallback((newOpen: boolean) => setOpen(newOpen), [])
    const handleClose = useCallback(()=> setAlert(false),[])
    useEffect(() => {
        toggleDrawer(false)
    }, [path])

    return (
        <>
            {/* 🛒 Right Section */}
            <Box component={"section"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                {/* 🔍 Search box */}
                <Search />
                <Link href={"/shop/cart"}>
                    <IconButton color="inherit">
                        <Badge badgeContent={items.length} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>

                <IconButton color="inherit" sx={{ display: { xs: "none", lg: "flex" } }} onClick={()=> setAlert(true)}>
                    <AccountCircleRoundedIcon />
                </IconButton>

                <IconButton color="inherit" onClick={toggleTheme}>
                    {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                {/* 🧭 Menu (mobile + desktop) */}
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                    sx={{ display: { xs: "inline-flex", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            top: 'var(--template-frame-height, 0px)',
                            width: "80%"
                        },
                    }}
                >
                    <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <IconButton size="large" onClick={() => setAlert(true)}>
                                <AccountCircleRoundedIcon sx={{ fontSize: 50 }} />
                            </IconButton>

                            <IconButton onClick={() => toggleDrawer(false)} sx={{width:70 , height:70}}>
                                <CloseRoundedIcon  />
                            </IconButton>
                        </Box>
                        <Divider sx={{ my: 3 }} />
                        <Box component={"nav"}>
                            <Box component={"ul"} >
                                {navLinks.map((item, i) => (
                                    <MenuItem key={i} onClick={() => toggleDrawer(false)}>
                                        <Link href={"/" + item} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {item}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />
                        <Link href={"/"} className='flex justify-center items-center h-[37vh]'>
                            {/* logo */}
                            <Typography variant='body1' fontSize={30}>QUENX.</Typography>
                        </Link>
                    </Box>
                </Drawer>
                <Snackbar
                    open={alert}
                    autoHideDuration={1500}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert
                        onClose={handleClose}
                        severity="info"
                        sx={{ width:{xs:"80%",lg:"100%"} , bgcolor:theme.palette.background.default , color:theme.palette.text.primary}}
                        variant="standard"
                    >
                        Profile feature coming soon 🚀
                    </Alert>
                </Snackbar>
            </Box>
        </>

    );
}
