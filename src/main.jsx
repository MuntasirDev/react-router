import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import UserDetails  from "./components/UserDetails/UserDetails.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/PostDetail/PostDetail.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";


const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "mobiles", element: <Mobiles /> },
      { path: "laptops", element: <Laptops /> },

      { 
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />
      },

      {
        path: "user2",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 usersPromise={usersPromise} />
          </Suspense>
        )
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),  
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      },
      {
        path: "*",
        element: <div><h2>404: Page Not Found</h2></div>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
