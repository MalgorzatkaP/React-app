import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
            Recipe Finder
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ color: '#fff' }}>
            search your own recipe
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}