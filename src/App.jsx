import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PhotographyPage from './pages/PhotographyPage'
import PhotographyDetailPage from './pages/PhotographyDetailPage'
import {
  AboutPage,
  ArticlesPage,
  ContactPage,
  MagazinesPage,
  NotFoundPage,
} from './pages/StudioPages'
import BookShootPage from './pages/BookShootPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="photography" element={<PhotographyPage />} />
          <Route path="photography/:slug" element={<PhotographyDetailPage />} />
          <Route path="book" element={<BookShootPage />} />
          <Route path="magazines" element={<MagazinesPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
