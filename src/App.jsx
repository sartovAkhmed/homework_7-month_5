import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Basket } from "./pages/Basket"
import { Products } from "./pages/Products"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="products" element={<Products />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<h2>Error 404</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
