import def from 'ajv/dist/vocabularies/applicator/additionalItems'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'

let routes = [
    { path : '/', element : <Home/>},
    { path : '/users', element : <Users/>},
    { path : '/products', element : <Products/>},
]


export default routes