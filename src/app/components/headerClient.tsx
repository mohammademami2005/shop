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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useThemeStore from "../store/store";

export default function HeaderClient() {
    const { mode, toggleTheme } = useThemeStore();
    const [searchBoxShow, setSearchBoxShow] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const pages = ["Home", "About"];

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            {/* 🧭 Menu (mobile + desktop) */}
            <Box>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleMenuOpen}
                    sx={{ display: { xs: "inline-flex", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    {pages.map((page) => (
                        <Button key={page} color="inherit">
                            {page}
                        </Button>
                    ))}
                </Box>

                {/* Menu Dropdown for mobile */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleMenuClose}>
                            {page}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>




            {/* 🛒 Right Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* 🔍 Search box */}
                <Paper
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: { xs: 200, sm: "fit-content" },
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
            </Box>
        </>

    );
}
