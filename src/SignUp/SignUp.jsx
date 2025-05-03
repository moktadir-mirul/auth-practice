import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const SignUp = () => {

    const {createUser} = use(AuthContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const email = 
    }

  return (
    <div>
      <div className="card w-full max-w-sm shrink-0 shadow-xl mx-auto bg-gray-200">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
          <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" name="photoUrl" />
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
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

export default SignUp;
