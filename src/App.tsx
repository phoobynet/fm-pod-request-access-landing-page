import LandingPage from './routes/LandingPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<LandingPage />}
      />
    </Routes>
  )
}
