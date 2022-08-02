import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "./Components/context/AurhContext";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyPosts from './Components/MyPosts/MyPosts';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import Details from './Components/Details/Details';
import AllPosts from "./Components/AllPosts/AllPosts";
import Logout from "./Components/Logout/Logout";

function App() {
  const [auth, setAuth] = useState({});
  const userLogout = () => {
    setAuth({})
  }

  const userLogin = (userData) => {
    setAuth(userData);
  };

  return (
    <>
      <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
        <Header />
        <main className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-trip" element={<Create />} />
            <Route path="/edit/:tripId" element={<Edit />} />
            <Route path="/details/:tripId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
