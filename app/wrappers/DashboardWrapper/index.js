"use client";
import { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CustomDropDown from "../../components/CustomDropDown";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CustomTable from "../../components/CustomTable";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const Main = styled("div", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(3),

    gap: "10px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "rgb(255, 149, 24)",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DashboardWrapper = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Order Details");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isCollapse, setIsCollapse] = useState(true);

  const handleClick = (option) => {
    setSelectedOption(option);
    if (option === "Reports") {
      setIsCollapse(!isCollapse);
    }
  };

  return (
    <Box sx={{ display: "flex", "::-webkit-scrollbar": { display: "none" } }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedOption}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            msOverflowStyle: "none", // for IE and Edge
            scrollbarWidth: "none", // for Firefox
            "&::-webkit-scrollbar": { display: "none" },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ minHeight: "90px !important" }}>
          <Box
            display="flex"
            width={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={logo} height={80} alt="logo" priority />
            {/* <Typography width={1} textAlign="center">
              {" "}
              Admin Utility
            </Typography> */}
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Order Details",
            "Reports",
            "IAP Ops Utility",
            "Knowledge Upload",
          ].map((text, index) => {
            return text === "Reports" ? (
              <List key={index}>
                <ListItemButton onClick={() => setIsCollapse(!isCollapse)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reports" />
                  {isCollapse ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      "Advice Data",
                      "Trade Details",
                      "Not Executed Trade",
                      "Active Client Data",
                      "New Subscription",
                      "Additional Investment Report",
                      "Withdraw Report",
                      "Portfolio Wise Report",
                    ].map((option, index) => (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => setSelectedOption(`${text} > ${option}`)}
                        key={index}
                      >
                        <ListItemText primary={option} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </List>
            ) : (
              <ListItem
                key={text}
                disablePadding
                onClick={() => handleClick(text)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box display="flex" gap={2} flexWrap="wrap">
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>Product:</Typography>
            <CustomDropDown
              options={[
                "IAP",
                "FRN",
                "ACE Cash",
                "ABAKKUS Smart Build India Portfolio",
                "Abakkus Smart Flexi-Cap Portfolio ",
              ]}
            />
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography>Execute Status:</Typography>
            <CustomDropDown options={["All", "Y", "N"]} />
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>Page Size:</Typography>
            <CustomDropDown options={["100", "500", "1000"]} />
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Box>
        <Divider />
        <Box>
          <CustomTable />
        </Box>
      </Main>
    </Box>
  );
};

export default DashboardWrapper;
