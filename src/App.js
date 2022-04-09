import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Register from './component/Register/Register';
import Products from './component/Products/Products';
import Orders from './component/Orders/orders';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='register' element={<Register></Register>}></Route>
    <Route path = 'products' element={
      <RequireAuth>
        <Products></Products>
      </RequireAuth>
    }></Route>
    <Route path = 'order' element={
      <RequireAuth>
        <Orders></Orders>
      </RequireAuth>
    }></Route>
      </Routes>
      </div>
  );
}

export default App;
