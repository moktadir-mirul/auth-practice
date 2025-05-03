import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const SignIn = () => {
    const {userSignIn} = use(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        userSignIn(email, password)
        .then((result) => console.log(result.user))
        .catch(err => console.log(err))
    }
    
  return (
    <div className="py-5">
      <div className="card w-full max-w-sm shrink-0 shadow-xl mx-auto bg-gray-200">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
