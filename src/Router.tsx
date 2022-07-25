import { Routes, Route } from 'react-router-dom'
import { Default } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Default />}>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  )
}

export { Router }

