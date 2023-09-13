import React, { useState } from 'react';
import DrawerComponent from './Drawer'
import AppBarComponent from './AppBarComponent';

export default function Header() {
    const [open,setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
  return (
    <div>
        <AppBarComponent open= {open} toggleDrawer={toggleDrawer} />
        <DrawerComponent open= {open} toggleDrawer={toggleDrawer} />
    </div>
  )
}
