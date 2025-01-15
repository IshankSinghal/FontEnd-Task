import React from "react";
import {
  Box,
  TextField,
  IconButton,
  Avatar,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BoltIcon from "@mui/icons-material/Bolt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AvatarImage from "../images/Profile8.jpeg";

function Header({ searchTerm, onSearchChange }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 1 },
      }}
    >
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search by Ticker Name, User, or Trader..."
        size="small"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: "#F0F1F2",
          borderRadius: 2,
          width: { xs: "100%", sm: "320px", md: "420px" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Borderless design
            },
          },
        }}
      />

      {/* Icons and Profile */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            backgroundColor: "gray.200",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <LocalFireDepartmentIcon color="error" />
        </Box>
        <Box
          sx={{
            backgroundColor: "gray.200",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <BoltIcon color="primary" />
        </Box>
        <Avatar
          src={AvatarImage}
          alt="User Profile"
          sx={{
            width: 48,
            height: 48,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
        <IconButton
          sx={{
            padding: 1,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "50%",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Header;
