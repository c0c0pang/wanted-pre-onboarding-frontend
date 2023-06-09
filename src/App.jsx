import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './signin_signup/Signin';
import Signup from './signin_signup/Signup';
import Main from './signin_signup/Main';
import Todo from './signin_signup/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
