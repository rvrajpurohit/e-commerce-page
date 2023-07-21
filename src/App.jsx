import { Route, Routes, createSearchParams, useNavigate } from "react-router-dom";
import {Navbar} from './components/navbar'
import {Products} from './pages/products'
import {Product} from './pages/product'
import {Cart} from './pages/cart'
import {NotFound} from './pages/404'
import {useCart} from './context/cart'

function App() {
    const navigate = useNavigate()
    const {cartItemCount} = useCart()
    const onSearch = (searchQuery) => {
        navigate(`/?${createSearchParams({q: searchQuery})}`)
    }

return(
    <>
    <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
);
}

export default App;