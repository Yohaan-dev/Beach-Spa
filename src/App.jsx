import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import LearnPage from './pages/LearnPage.jsx'
import GetIntouch from './pages/GetIntouch.jsx'
import BeachSpa from './pages/BeachSpa.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path='/learn' element={<LearnPage/> } />
      <Route path='/get-intouch' element={<GetIntouch />} />
      <Route path='/Beach-Spa' element={<BeachSpa/> } />
      </Route>
  ));
const App = () => {
  return <RouterProvider router={router} />
}

export default App