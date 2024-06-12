import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products.tsx'
import { PricePlans } from './pages/PricePlans.tsx'
import { Pages } from './pages/Pages.tsx'
import { Navigation } from './components/Navigation.tsx'


export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/pages' Component={Pages} />
        <Route path='/products' Component={Products} />
        <Route path='/price-plans' Component={PricePlans} />
      </Routes>
    </Router>
  )
}
