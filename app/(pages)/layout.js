import Footer from '@/app/Components/Footer/Footer.js'

import React from 'react'

export default function PageLayout({ children }) {
  return (
      <>
        {children}
        <Footer />
      </>
  )
}
