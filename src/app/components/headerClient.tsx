"use client";
import React, { useState } from "react";
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
import { useThemeStore } from "../store/store";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from "next/link";

export default function HeaderClient() {
    const { mode, toggleTheme } = useThemeStore();
    const [searchBoxShow, setSearchBoxShow] = useState<boolean>(false)
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => { setOpen(newOpen) }
    const navLinks = ["Shop", 'Best Sellers', 'Active QX', 'Artisanal', 'Kids', 'About Us']

    // const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <>



            {/* 🛒 Right Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* 🔍 Search box */}
                <Paper
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "fit-content", sm: "fit-content" },
                        p: "2px 4px",
                        borderRadius: 100
                    }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <InputBase
                        hidden={searchBoxShow ? false : true}
                        sx={{ ml: 1, flex: 1, }}
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onBlur={() => setSearchBoxShow(false)}

                    />
                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={() => setSearchBoxShow(true)}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <IconButton color="inherit">
                    <Badge badgeContent={3} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

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




                {/* Menu Dropdown for mobile
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "center",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    
                >
                    {navLinks.map((link) => (
                        <MenuItem sx={{width:"100vw", height:"15vh"}} key={link} onClick={handleMenuClose}>
                            {link}
                        </MenuItem>
                    ))}
                </Menu> */}
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            top: 'var(--template-frame-height, 0px)',
                            width:"80%"
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
                            <MenuItem key={i} component={Link} onClick={()=>toggleDrawer(false)} href={item}>{item}</MenuItem>
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
