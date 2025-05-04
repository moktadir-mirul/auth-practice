import { createBrowserRouter } from "react-router";
import App from "../App";
import SignIn from "../Signin/SignIn";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import Contacts from "../Contacts/Contacts";
import Info from "../Info/Info";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {path: "/", Component: App, children: [
        {index:true, Component:Home},
        {path:"/signin", Component: SignIn},
        {path:"/signup", Component: SignUp},
        {path:"/blogs", element: <PrivateRoute><Blogs></Blogs></PrivateRoute>},
        {path:"/contacts", element: <PrivateRoute><Contacts></Contacts></PrivateRoute>},
        {path:"/info", element: <PrivateRoute><Info></Info></PrivateRoute>}
    ]}
])