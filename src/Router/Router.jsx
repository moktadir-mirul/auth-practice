import { createBrowserRouter } from "react-router";
import App from "../App";
import SignIn from "../Signin/SignIn";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Blogs from "../Blogs/Blogs";



export const router = createBrowserRouter([
    {path: "/", Component: App, children: [
        {index:true, Component:Home},
        {path:"/signin", Component: SignIn},
        {path:"/signup", Component: SignUp},
        {path:"/blogs", Component: Blogs}
    ]}
])