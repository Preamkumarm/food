import Header from "./components/Header"
import Aboutus from './components/Aboutus';
import {Route,Routes,BrowserRouter} from "react-router-dom"
function App()
{
  return(<>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Header/>}></Route>
  <Route path='/about' element={<Aboutus/>}></Route>
  </Routes>
  </BrowserRouter>
 </>)
}
export default App