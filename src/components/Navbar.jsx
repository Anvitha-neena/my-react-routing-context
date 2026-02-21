import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 16px",
        }}
      >
        <Box
          style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}
        >
          <Link
            to="/dashboard"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
            Profile
          </Link>
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
            Logout
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
