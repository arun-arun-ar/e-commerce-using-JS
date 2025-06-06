import React from "react"
import { Outlet } from "react-router"
import Navigation from "./pages/auth/Navigation"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router";
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        {/* Your routes here */}
        <Route element={<Outlet />}>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App