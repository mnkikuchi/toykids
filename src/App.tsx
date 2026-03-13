import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { UnitsPage } from './pages/UnitsPage'
import { ContactPage } from './pages/ContactPage'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/categorias" element={<CategoriesPage />} />
              <Route path="/unidades" element={<UnitsPage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
