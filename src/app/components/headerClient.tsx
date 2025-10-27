"use client";
import React, { useEffect, useState } from "react";
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
} from "@mui/material";
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

export default function HeaderClient() {
    const { mode, toggleTheme } = useThemeStore();
    const [searchBoxShow, setSearchBoxShow] = useState<boolean>(false)
    const { items } = useCartStore()
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => { setOpen(newOpen) }
    const navLinks = ["shop", 'best-sellers', 'active-qx', 'artisanal', 'kids', 'About']
    const [myData, setMyData] = useState<AllData[] | AllData | null>([])


    return (
        <>
            {/* 🛒 Right Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* 🔍 Search box */}
                {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton> */}

                <Search />
                <Link href={"/shop/cart"}>
                    <IconButton color="inherit">
                        <Badge badgeContent={items.length} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>

                <Button color="inherit">Login</Button>

                <IconButton color="inherit" onClick={toggleTheme}>
                    {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
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
                                justifyContent: 'flex-end',
                            }}
                        >
                            <IconButton onClick={() => toggleDrawer(false)}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                        {navLinks.map((item, i) => (
                            <MenuItem key={i} component={Link} onClick={() => toggleDrawer(false)} href={"/" + item}>{item}</MenuItem>
                        ))}

                        <Divider sx={{ my: 3 }} />
                        <MenuItem>
                            <Button color="primary" variant="contained" fullWidth>
                                Sign up
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button color="primary" variant="contained" fullWidth>
                                Sign in
                            </Button>
                        </MenuItem>
                    </Box>
                </Drawer>
            </Box>
        </>

    );
}
