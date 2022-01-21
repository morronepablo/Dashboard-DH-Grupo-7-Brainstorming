import React from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import ContentCore from './components/contentcore/ContentCore'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header />
      <Aside />
      <ContentCore />
      <Footer />
    </div>
  )
}
