import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../../ui/components/header'
import Footer from '../../ui/components/footer'
import Layout from '../../ui/components/layout'
import { routes } from '../../engine/config/routes/routes'

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            {Object.keys(routes).map(item => (
                <Route element={routes[item].element} path={routes[item].path} key={item} />
              ))}
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}


