import React, { useState } from "react";
import {
  AppBar,
  Box,
  // InputBase,
  Menu,
  MenuItem,
  styled,
  alpha,
  Toolbar,
  Typography,
  Container
} from "@mui/material";
import {
  // CenterFocusStrong,
  // Facebook,
  // Instagram,
  Menu as MenuIcon,
  // Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    alignItems: 'center',
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "صفحه اصلی", Link: "/" },
    { Name: "جزئیات محصول", Link: "/details" },
    { Name: "بلاگ", Link: "/" },
    { Name: "درباره ما", Link: "/" },
  ];
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{ width: { xs: '100vw', sm: '80vw' }, top: { xs: 30, sm: 50 } }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 10,
      marginTop: theme.spacing(1),

      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '10px 0',
      },
      '& .MuiMenuItem-root': {
        justifyContent: 'center',
        flexDirection: "column-reverse",
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "black", color: 'white' }} position={"static"}>
      <Container maxWidth="xxxl">
        <StyledToolbar>
          <SocialBox>
            <Typography align="center" sx={{ fontWeight: 900, fontFamily: 'iranyekan', fontSize: { xs: '2rem', sm: '3rem' }, padding: 1 }}>
              مد<b style={{ color: "red" }}>استایل</b>
            </Typography>
            {/* <Facebook />
          <Instagram />
          <Twitter /> */}
          </SocialBox>

          <SearchBox>
            <MenuBox sx={{ display: { xs: 'none', md: "flex" } }}>
              {MenuItems.slice(0).reverse().map((item) => (
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  <Link style={{ textDecoration: 'none', color: '#fff' }} to={item.Link}>{item.Name}</Link>
                </Typography>
              ))}
            </MenuBox>
            {/* <InputBase placeholder="Search ..." sx={{ color: "white" }} /> */}
            <MenuIcon
              sx={{
                color: "white",
                cursor: 'pointer',
                display: { xs: "block", sm: "block", md: "none" },
              }}
              onClick={() => SetOpen(!open)}
            />
          </SearchBox>
        </StyledToolbar>
        <StyledMenu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ width: { xs: '80vw', sm: '70vw' }, height: "fit-content" }}>
            {MenuItems.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "1rem", sm: '1.3rem' },
                  textAlign: "center",
                }}
              >
                <Link style={{ textDecoration: 'none', color: '#000' }} to={item.Link}>{item.Name}</Link>
              </MenuItem>
            ))}
          </Box>
        </StyledMenu>
      </Container>
    </AppBar >
  );
};

export default Navbar;
