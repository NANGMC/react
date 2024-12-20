import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./profile";
import Home from "./pages/home";
import Layout from "./pages/Layout";
import Blogs from "./pages/shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );

}


