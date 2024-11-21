import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logout from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../components/firebase";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../state";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { toast } from "sonner";

export default function AccountMenu({
  setOpenCartDrawer,
  setOpenSettingsDrawer,
}) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const LogOut = async () => {
    await auth.signOut(); // Sign out from Firebase
    dispatch(logOut());
    toast.success("Successfully signed out", {
      icon: <CheckCircleIcon sx={{ color: green[500] }} />,
    });
    window.location.href = "/";
  };

  useEffect(() => {}, [currentUser]);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {currentUser ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} src={currentUser.photoURL}>
                {currentUser.displayName ? currentUser.displayName[0] : ""}
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </Button>
        )}
      </Box>

      {currentUser && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              setOpenCartDrawer(true);
            }}
          >
            <ShoppingCartIcon fontSize="small" sx={{ marginRight: 2 }} />
            Cart
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpenSettingsDrawer(true);
            }}
          >
            <SettingsIcon fontSize="small" sx={{ marginRight: 2 }} />
            Profile Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={LogOut}>
            <Logout fontSize="small" sx={{ marginRight: 2 }} />
            Logout
          </MenuItem>
        </Menu>
      )}
    </React.Fragment>
  );
}
