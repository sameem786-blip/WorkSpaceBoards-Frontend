import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../../public/Logo/gettyimages-1447466279-640x640-removebg-preview.png";
import NotificationIcon from "../../public/Icons/notifications.png";
import ProfileIcon from "../../public/Icons/profile.png";
import { makeStyles } from "@material-ui/core";
import TorchIcon from "../../public/Icons/pixel-art-illustration-torch-pixelated-torch-torch-fire-icon-pixelated-pixel-art-game_1038602-682-removebg-preview.png";
// import MaterialTable from "material-table";
import "./navbar.css";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      width: "20%",
      boxShadow: "none",
      dropShadow: "none",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      className={classes.root}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        backgroundColor: "transparent",
        opacity: "1",
      }}
      MenuListProps={{
        sx: {
          backgroundColor: "transparent",
        },
      }}
    >
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        Edit Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      className={classes.root}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        backgroundColor: "transparent",
        opacity: "1",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p>Profile</p>
      </MenuItem>
      <MenuItem
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p>Edit Profile</p>
      </MenuItem>
      <MenuItem
        sx={{
          width: "100%",
          border: "5px solid #4d2e19",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3%",
          backgroundColor: "#825638",
          "&:hover": {
            backgroundColor: "#5e3d27", // Change the background color on hover
          },
        }}
      >
        {/* <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Sign Out</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#825638",
          border: "5px solid #4d2e19",
          borderRadius: "5px",
          marginTop: "0px",
          width: "98%",
          marginLeft: "1%",
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}
          <img src={Logo} alt="logo" className="navbar-logo"></img>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent", // Change the background color on hover
                },
              }}
            >
              <Badge badgeContent={18} color="error">
                <img
                  src={NotificationIcon}
                  alt="Notifications"
                  className="navbar-icons"
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent", // Change the background color on hover
                },
              }}
            >
              <img src={ProfileIcon} alt="Profile" className=" profile" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <img src={TorchIcon} alt="torch" className="navbar-icon" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
