import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const MainAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Box sx={{ px: 1, display: "flex" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/search")}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "Showcard Gothic",
                  fontWeight: 500,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                NASA Media Library
              </Typography>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
