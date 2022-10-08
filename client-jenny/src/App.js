import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route
} from "react-router-dom"
import {useSelector} from 'react-redux'

import Register from './pages/Register'
import About from './pages/About'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'


const App = () => {
	const user=  useSelector(state=>state.user.currentUser)

  return (
		<Router>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/products" element={<AllProducts/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/product/:id" element={<SingleProduct />} />
				<Route path="/products/search/:searchString" element={<AllProducts/>} />
				<Route path="/products/tags/:tags" element={<AllProducts/>} />
				<Route path="/cart" element={<Cart/>} />
				<Route 
					path="/login" 
					element={ user ? <Navigate to="/"/> : <Login />  }
				/>
				<Route 
					path="/register" 
					element={user ? <Navigate to="/"/> : <Register />} 
				/>
				<Route path="*" element={<PageNotFound/>}/>
			</Routes>
		</Router>
	)
};

export default App;
