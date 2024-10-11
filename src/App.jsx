import { BrowserRouter, Route, Routes } from "react-router-dom";
import register from "./pages/register";
import signin from "./pages/signin.jsx";
import homepage from "./pages/homepage.jsx";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={register()}/>
    <Route path="/signin" element={signin()}/>
    <Route path="/homepage" element={homepage()}/>
   </Routes>
   </BrowserRouter>
  )
}
