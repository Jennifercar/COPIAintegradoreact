import React from 'react'
import { LayoutWrapper } from './layoutStylos'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  )
}

export default Layout