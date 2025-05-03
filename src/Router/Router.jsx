import { createBrowserRouter } from "react-router";
import App from "../App";
import SignIn from "../Signin/SignIn";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";



export const router = createBrowserRouter([
    {path: "/", Component: App, children: [
        {index:true, Component:Home},
        {path:"/signin", Component: SignIn},
        {path:"/signup", Component: SignUp}
    ]}
])