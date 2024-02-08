import React from "react";
import { Box, Container } from "@mui/material";
import MainAppBar from "./appbar";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <MainAppBar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "auto",
          p: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
