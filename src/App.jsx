import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"

const router = createBrowserRouter(
  [
    {
      path : "",
      element:
      <>
        <Navbar></Navbar>
        <Home></Home>
      </> 
    },
    {
      path : "/pastes",
      element: 
      <div className="">
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    },
    {
      path : "/pastes/:id",
      element: 
      <div className="">
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    },
  ]
)

function App() {

  return (
    <>
      <div className="">
        <RouterProvider router={router}>
        </RouterProvider>
      </div>
    </>
  )
}

export default App
