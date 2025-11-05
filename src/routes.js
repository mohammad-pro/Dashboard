import def from 'ajv/dist/vocabularies/applicator/additionalItems'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Product from './Components/Product'

let routes = [
    { path : '/', element : <Home/>},
    { path : '/users', element : <Users/>},
    { path : '/products', element : <Products/>},
    { path : '/product/:productID', element : <Product/>},
]


export default routes