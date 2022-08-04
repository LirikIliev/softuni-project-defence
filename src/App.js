import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./context/AurhContext";
import { LikedContext } from "./context/LikedContext";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyPosts from './Components/MyPosts/MyPosts';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import Details from './Components/Details/Details';
import AllPosts from "./Components/AllPosts/AllPosts";
import Logout from "./Components/Logout/Logout";
import Like from "./Components/Like/Like";
import Delete from "./Components/Delete/Delete";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useLike } from "./hooks/useLike";


function App() {
  const sessionName = "user";
  const [auth, setAuth] = useLocalStorage(sessionName, {});
  const [liked, setLiked] = useLike();

  const userLikedTrip = (value) => {
    setLiked(value);
  };

  const userLogout = () => {
    setAuth({});
  };

  const userLogin = (userData) => {
    setAuth(userData);
  };

  return (
    <>
      <LikedContext.Provider value={{ liked, userLikedTrip }}>
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout, sessionName }}>
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
              <Route path="/delete/:tripId" element={<Delete />} />
              <Route path="/like/:tripId" element={<Like />} />
            </Routes>
          </main>
          <Footer />
        </AuthContext.Provider>
      </LikedContext.Provider>
    </>
  );
}

export default App;
