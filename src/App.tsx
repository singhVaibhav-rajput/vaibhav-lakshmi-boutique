import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import type { Language } from './content'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tailoring from './pages/Tailoring'
import Classes from './pages/Classes'
import ServiceDetail from './pages/ServiceDetail'
import { About, Contact, Gallery, NotFound } from './pages/InfoPages'

export default function App() {
  const [language, setLanguage] = useState<Language>('en')
  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'hi' : 'en')

  return (
    <Routes>
      <Route element={<Layout language={language} onToggleLanguage={toggleLanguage} />}>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/tailoring" element={<Tailoring language={language} />} />
        <Route path="/stitching-classes" element={<Classes language={language} />} />
        <Route path="/blouse-stitching" element={<ServiceDetail language={language} kind="blouse" />} />
        <Route path="/suit-kurti-stitching" element={<ServiceDetail language={language} kind="suit" />} />
        <Route path="/cutting-measurement-course" element={<ServiceDetail language={language} kind="cutting" />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Route>
    </Routes>
  )
}