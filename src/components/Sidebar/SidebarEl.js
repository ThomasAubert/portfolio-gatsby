import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  align-items: center;
  background: #817f82;
  display: grid;
  height: 100%;
  left: 0;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  position: fixed;
  top: 0;
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
  width: 100%;
  z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
  color: #ffffeb;
`

export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
`

export const SidebarWrapper = styled.div`
  color: #ffffeb;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  color: #ffffeb;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  transform: translateX(-20px);

  &:hover{
    color: #a30000;
    transition: 0.2s ease-in-out;
  }
`

