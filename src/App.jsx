import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './components/Index'
import Otra from './components/Otra'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/otra', element: <Otra /> },
])

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}