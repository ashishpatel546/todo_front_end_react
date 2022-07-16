import React from 'react'
import './Layout.module.css'

const Layout = (props) => {
    const cssClasses = `layout ${props.className}`
  return (
    <div className='layout'>{props.children}</div>
  )
}

export default Layout