import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const SignIn = () => {
    const userInfo = use(AuthContext);
    console.log(userInfo);
    
  return (
    <div className="py-5">
      <div className="card w-full max-w-sm shrink-0 shadow-xl mx-auto bg-gray-200">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
