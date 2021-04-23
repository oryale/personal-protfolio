import React from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'
import { useMenu } from '../hooks/useMenu'

import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

import Clickon from './sfx/clickon.mp3'
import Clickoff from './sfx/clickoff.mp3'

const Header = ({ mode, modeFunc }) => {
  const [play1] = useSound(Clickon)
  const [play2] = useSound(Clickoff)
  const { toggleMenu, closeMenu, isMenuOpen } = useMenu()

  return (
    <>
      <Container>
        <span onClick={closeMenu}>
          <Logo />
        </span>
        <div className='icons'>
          <Link
            onClick={toggleMenu}
            onMouseDownCapture={isMenuOpen ? play1 : play2}>
            <MenuBtn />
          </Link>

          <Toggle theme={mode} toggleTheme={modeFunc} />
        </div>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  margin-bottom: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const Link = styled.button`
  padding: 10px;
  display: flex;
  border: none;
  outline: none;
  margin: 0px 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: transparent;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.hover};
  }
`
