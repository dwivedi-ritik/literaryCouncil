'use client'

import { useState, useEffect } from 'react'
import Navbar from './navbar'

const HeaderComponent = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    function setNavbar() {
      if (window.scrollY >= window.innerHeight - 110) setShowNavbar(true)
      else setShowNavbar(false)
    }

    window.addEventListener('scroll', setNavbar)

    // for window reloading
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      setNavbar()
    }
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', setNavbar)
    }
  }, [])

  return (
    <div className={showNavbar ? 'flex' : 'hidden'}>
      <Navbar />
    </div>
  )
}
export default HeaderComponent
