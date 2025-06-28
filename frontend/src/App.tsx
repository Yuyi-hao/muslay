import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import AuthCallbackPage from './pages/auth-callback/AuthCallbackPage';
import MainLayout from './layout/MainLayout';
import ChatPage from './pages/chat/ChatPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/auth-callback' element={<AuthCallbackPage/>}></Route>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/chats' element={<ChatPage/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
