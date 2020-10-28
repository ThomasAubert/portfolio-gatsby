import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,  } from './SidebarEl';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-20}
          >
            About
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-20}
          >
            Projects
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-20}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;