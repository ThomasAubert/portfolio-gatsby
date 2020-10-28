import styled from 'styled-components';
import { Link as LinkRouter } from 'gatsby';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  align-items: center;
  background: ${({scrollNav})=> (scrollNav ? '#f5f5f5': 'transparent')};
  display: flex;
  height: 60px;
  justify-content: center;
  margin-top: -60px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`
export const NavLogo = styled(LinkRouter)`
  align-items: center;
  color: #0a0a0a;
  cursor: pointer;
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  justify-self: flex-start;
  margin-left: 24px;
  text-decoration: none;

  &:hover{
    color: #e00000;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 37.5em){
    color: #0a0a0a;
    cursor: pointer;
    display: block;
    font-size: 2rem;
    postion: absolute;
    right: 0;
    top: 0;    
    transform: translate(-100%, 25%);
  }
`

export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-right: 22px;
  text-align: center;

  @media screen and (max-width: 37.5em){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 60px;
`

export const NavLinks = styled(LinkScroll)`
  align-items: center;
  color: #0a0a0a;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;

  &:hover{
    color: #e00000;
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 2px solid #e00000;
  }
`
