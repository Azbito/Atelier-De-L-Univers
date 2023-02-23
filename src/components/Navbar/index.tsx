import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from 'react'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { items } from "./items";
import styles from './navbar.module.scss'
import scrollBack from "@/utils/scroll";
import AddCommentIcon from '@mui/icons-material/AddComment';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography/Typography";
import Menu from "@mui/material/Menu";
import { settings } from "./settings";

type Anchor = "left"

export default function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      className={styles.navbarContent}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton className={styles.button} onClick={item.onClick}>
              <div className={styles.icon}>
                {item.icon}
              </div>
              <p className={styles.title}>{item.title}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={styles.navbar}>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon className={styles.menuButton} /></Button>
      <h1 onClick={scrollBack} className={styles.logo}>Atelier de L'Univers</h1>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>

      <div className={styles.end}>
        <Button className={styles.post}>
          <span className={styles.postTitle}>Post</span>
          <AddCommentIcon />
        </Button>
        <IconButton className={styles.icon} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleIcon className={styles.avatarIcon} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
              <span onClick={setting.onClick}>{setting.title}</span>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  )
}