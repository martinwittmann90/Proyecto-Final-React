import ClearAllIcon from "@mui/icons-material/ClearAll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { generalContext } from "../components/CartContext";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const pages = [
  { label: "Inicio", link: "/" },
  { label: "Camisetas", link: "/category/camiseta" },
  { label: "Shorts", link: "/category/short" },
  { label: "Checkout", link: "/checkout" },
  { label: "Contacto", link: "/contact" },
];

const Navbar = () => {
  const { cart } = React.useContext(generalContext);
  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      sx={{ backgroundColor: "#9fc5e8" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Logo />
          </Link>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: "1rem",
              color: "#073763",
              textDecoration: "none",
              marginLeft: 7,
            }}
          >
            NISCHE STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ color: "#073763" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <ClearAllIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.link}>{page.label}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#f7f7f7", 
              textDecoration: "none",
            }}
          >
            NISCHE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#f7f7f7",
                  my: 2,
                  display: "block",
                }}
              >
                {" "}
                <Link to={page.link}>{page.label}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <CartWidget quantity={cant} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;