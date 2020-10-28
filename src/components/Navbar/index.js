import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu,
  NavItem, NavLinks, } from './NavbarEl';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const onScroll = () => {
    if(window.scrollY >= 60){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
    
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#0a0a0a'}}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            TA<span className='logo-span'>.</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
                smooth={true}
                duration={1000}
                spy={true}
                exact='true'
                offset={-20}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'
                smooth={true}
                duration={1000}
                spy={true}
                exact='true'
                offset={-10}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
                smooth={true}
                duration={1000}
                spy={true}
                exact='true'
                offset={20}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;