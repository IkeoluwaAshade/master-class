import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiCall from './ApiConsumption/ApiCall'
import DetailedProductPage from './ApiConsumption/DetailedProductPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiCall />} />
          <Route path="/detail/:id" element={<DetailedProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App