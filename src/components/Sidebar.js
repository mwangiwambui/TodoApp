import React from "react";

import {slide as Menu} from "react-burger-menu"

const Sidebar = props => {

  const links = [
    {
      id: 1,
      path: "/todoapp/",
      text: "Home",
    },
    {
      id : 2,
      path: "/todoapp/about",
      text: "About",
    }
  ]

  return (
    <Menu {...props}>
      {links.map((link) => {
        return (
          <a key={link.id} className="menu-item" href={link.path}>            
              {link.text}
          </a>
        )
      })}
    </Menu>
  )
}

export default Sidebar