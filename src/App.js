
import './App.css'
import { HashRouter, Route,  Routes } from 'react-router-dom'
import MainLayout from '../src/components/layout/MainLayout'
import Assessment from './Assessment'
import Dashboard from './Dashboard'
import MyLiblrary from './MyLiblrary'
import RoundStatus from './RoundStatus'

function App() {
 
  return (
    <>
      <div className='grid-container'>
        <HashRouter>
          <Routes>
            <Route path='/' exact  element={<MainLayout />}>
            <Route  index element={<Assessment />} />
              <Route path="/dashboard"   element={<Dashboard />} />
              <Route path="/mylibrary"  element={<MyLiblrary />} />
              <Route path="/roundstatus"  element={<RoundStatus />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
