import{ createBrowserRouter,RouterProvider} from 'react-router-dom'
import{routes} from "./routes/routes"
import './App.css'


const Router = createBrowserRouter(routes)
function App() {

  return (
    <>
      {/* <h1>prem</h1> */}
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
