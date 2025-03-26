import "bootstrap/dist/css/bootstrap.min.css"
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
      <div className="">
        <Navbar></Navbar>
        <Home></Home>
      </div>
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
