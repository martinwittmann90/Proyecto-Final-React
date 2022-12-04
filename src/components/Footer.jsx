import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography } from "@mui/material";
import React from "react";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  return (
    <Box
      className="footer-container"
      sx={{ backgroundColor: "#03a5fc" }}
    >
      <a className="socialIcon" href="https://www.instagram.com/nischestore/">
        <InstagramIcon
          variant="outlinedSizeSmall"
          color="inherit"
        />/nischestore
      </a>
      <a className="socialIcon" href="https://www.twitter.com/nischestore/">
        <TwitterIcon
          variant="outlinedSizeSmall"
          color="inherit"
        />/nischestore
      </a>
      <Box className="copyright-text">
        <Typography
          sx={{
            color: "#0b5394",
            "&:hover": { color: "inherit" },
          }}
        >
          © 2022 NISCHE STORE - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;