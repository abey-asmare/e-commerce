import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Category from '@/components/Category';
import ProductDetail from '@/components/ProductDetail';
function App() {

  return (
         <Router>
          <Navbar></Navbar>
         <Category></Category>
         {/* <ProductDetail></ProductDetail> */}
      <Routes>
      </Routes> 
    </Router>
  )
}

export default App
