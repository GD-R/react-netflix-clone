import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import AppContext from "./Context/AppContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MovieSection from "./Pages/MovieSection";
import SearchPage from "./Pages/SearchPage";
import SignUp from "./Pages/SignUp";
import TvSection from "./Pages/TvSection";


function App() {
  return (
    <>
    <AppContext>
    <Navbar/>
   <Routes>
   <Route path="/login" element={<Login/>}  />
   <Route path="/signUp" element={<SignUp/>}  />
   <Route path="/account" element={ <ProtectedRoute><Account/></ProtectedRoute>}/>
   <Route path="/" element={<Home/>}>
      <Route path="/" element={<MovieSection/>}/>
      <Route path="movies" element={<MovieSection/>}/>
      <Route path="tv" element={<TvSection/>} />
      <Route path="/search" element={<SearchPage/> }   />
   </Route>
   </Routes>
   </AppContext>
   
    </>
  );
}

export default App;
