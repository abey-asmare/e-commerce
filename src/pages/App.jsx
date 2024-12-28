import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

import ProductDetail from "@/components/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./login";
import ProductForm from "./ProductForm";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/products/new"
          element={<ProductForm></ProductForm>}
        ></Route>
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetail></ProductDetail>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
