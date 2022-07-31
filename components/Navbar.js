import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Head from 'next/head';
import {Typography, Box, Button, IconButton, Toolbar, Container, Menu, MenuItem, AppBar} from '@mui/material';
import { useSession, signIn, signOut } from "next-auth/react"

const pages = ['Discover', 'Fundraise For', 'How it Works'];
export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
     setAnchorElUser(null);
    };
  return (
    <>
    <Head>
      <title>ShareCare || Crowdsourcing</title>
    </Head>
    <AppBar position="static" sx={{ bgcolor: "#36c958" }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            SHARECARE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <Box >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ mr: 'auto', width: '2%', display: 'block'}}>{page}</Typography>
                    </MenuItem>
                ))}
             </Box>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.0rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            SHARECARE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
    <Box>
        <Button onClick={signIn} sx={{color: '#ffffff', backgroundColor: '#fffff', border: 'solid',textDecoration: 'none'}}>
          {/* <Link href='/SignIn' sx={{}}>LOGIN</Link> */}
          LOGIN
          </Button>
    </Box>    
        </Toolbar>
      </Container> 
    </AppBar>
    </>
  )
}
