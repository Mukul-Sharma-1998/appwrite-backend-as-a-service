import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import Login from "./pages/Login";

const router2 = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>

            <Route path='' element={<Home />} />

            <Route path='login' element={
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            } />

            <Route path='signup' element={
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            } />

            <Route path='all-posts' element={
                <AuthLayout authentication={true}>
                    <AllPosts />
                </AuthLayout>
            } />

            <Route path='add-post' element={
                <AuthLayout authentication={true}>
                    <AddPost />
                </AuthLayout>
            } />

            <Route path='edit-post/:slug' element={
                <AuthLayout authentication={true}>
                    <EditPost />
                </AuthLayout>
            } />

            <Route path='post/:slug' element={
                <Post />
            } />

        </Route>
        
    )
)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//         {
//             path: "/",
//             element: <Home />,
//         },
//         {
//             path: "/login",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Login />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//               // <Signup />
//                 <AuthLayout authentication={false}>
//                     <Signup />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/all-posts",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AllPosts />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/add-post",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AddPost />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/edit-post/:slug",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <EditPost />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/post/:slug",
//             element: <Post />,
//         },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router2} />
    </Provider>
  </React.StrictMode>,
)
