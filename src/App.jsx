import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NewPage from "./Components/Trending/NewPage";
import WomenPage from "./Components/Women/WomenPage";
import MenPage from "./Components/Men/MenPage";
import KidsPage from "./Components/Kids/KidsPage";
import MotorSportsPage from "./Components/MotorSports/MotorSportsPage";
import CartPage from "./Components/Cart/CartPage";
import CollaborationPage from "./Components/Collaborations/CollaborationPage";
import SportsPage from "./Components/Sports/SportsPage";
import { ContactsPage } from "./Components/Contacts/ContactsPage";
import AboutUsPage from "./Components/AboutUs/AboutUsPage";
import { SearchProvider } from "./SearchContext";
import SearchResults from "./SearchResults";
import LoadingBar from "react-top-loading-bar";
import LikedPage from "./Components/Liked/LikedPage";
import { Login } from "./Components/jwt/LogIn";
import Signup from "./Components/jwt/SignUp";
import AuthPage from "./Components/jwt/AuthPage";
import { Logout } from "./Components/jwt/LogOut";
import { useAuth } from "./AuthContext"; // 👈 Auth context

const AppRoutes = ({ user, loadingBarRef }) => {
  const location = useLocation();

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const timer = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 400);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header loadingBarRef={loadingBarRef} />
      <main>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/New" element={user ? <NewPage /> : <Navigate to="/login" />} />
          <Route path="/Women" element={user ? <WomenPage /> : <Navigate to="/login" />} />
          <Route path="/Men" element={user ? <MenPage /> : <Navigate to="/login" />} />
          <Route path="/Kids" element={user ? <KidsPage /> : <Navigate to="/login" />} />
          <Route path="/MotorSports" element={user ? <MotorSportsPage /> : <Navigate to="/login" />} />
          <Route path="/Cart" element={user ? <CartPage /> : <Navigate to="/login" />} />
          <Route path="/Collaborations" element={user ? <CollaborationPage /> : <Navigate to="/login" />} />
          <Route path="/Sports" element={user ? <SportsPage /> : <Navigate to="/login" />} />
          <Route path="/Contacts" element={user ? <ContactsPage /> : <Navigate to="/login" />} />
          <Route path="/Liked" element={user ? <LikedPage /> : <Navigate to="/login" />} />
          <Route path="/AboutUs" element={user ? <AboutUsPage /> : <Navigate to="/login" />} />
          <Route path="/search" element={user ? <SearchResults /> : <Navigate to="/login" />} />

          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/AuthPage" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  const loadingBarRef = useRef(null);
  const { user } = useAuth();

  return (
    <SearchProvider>
      <BrowserRouter>
        <LoadingBar color="#f11946" ref={loadingBarRef} height={3} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <AppRoutes user={user} loadingBarRef={loadingBarRef} />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
